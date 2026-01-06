package editor

import (
	"context"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type Folder struct {
	ctx context.Context
}

func NewFolder() *Folder {
	return &Folder{}
}

func (f *Folder) Startup(ctx context.Context) {
	f.ctx = ctx
}

type Time = time.Time

type Content struct {
	FilePath    string    `json:"file_path"`
	IsDir       bool      `json:"is_dir"`
	LastModTime time.Time `json:"last_mod_time"`
	Content     *string   `json:"content"` // Pointer for nullable
}

type TreeNode struct {
	name string
	Content
	children []TreeNode
}

type FolderContent struct {
	Name     string `json:"name"`
	Content  `json:"content"`
	Children []FolderContent `json:"children"`
}

// Recursively build TreeNode from directory
func buildTreeNodeParallel(path string) TreeNode {
	info, _ := os.Stat(path)

	node := TreeNode{name: filepath.Base(path), Content: Content{FilePath: path, IsDir: info.IsDir(), LastModTime: info.ModTime().UTC()}}

	if info.IsDir() {
		contents, _ := os.ReadDir(path)

		// Process children in parallel
		type result struct {
			index int
			node  TreeNode
		}

		results := make(chan result, len(contents))

		for i, entry := range contents {
			go func(i int, entry os.DirEntry) {
				childPath := filepath.Join(path, entry.Name())
				results <- result{i, buildTreeNodeParallel(childPath)}
			}(i, entry)
		}

		// Collect results
		node.children = make([]TreeNode, len(contents))
		for range contents {
			r := <-results
			node.children[r.index] = r.node
		}
	}

	return node
}

// Convert TreeNode to FolderContent (recursive)
func (t *TreeNode) getFileTree() FolderContent {
	result := FolderContent{
		Name:     t.name,
		Content:  t.Content,
		Children: []FolderContent{},
	}

	// Recursively process all children
	for _, child := range t.children {
		result.Children = append(result.Children, child.getFileTree())
	}

	return result
}

func (f *Folder) OpenFolder() FolderContent {
	selection, err := runtime.OpenDirectoryDialog(f.ctx, runtime.OpenDialogOptions{
		Title: "Select Project Folder",
	})
	if err != nil {
		log.Fatal(err)
	}

	// Build the tree recursively
	fileTree := buildTreeNodeParallel(selection)
	return fileTree.getFileTree()
}

func (f *Folder) OpenFile() string {
	selection, err := runtime.OpenFileDialog(f.ctx, runtime.OpenDialogOptions{
		Title: "Select File",
	})
	if err != nil {
		return ""
	}

	content, err := os.ReadFile(selection)
	if err != nil {
		return ""
	}

	return string(content)
}
