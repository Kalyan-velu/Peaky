package editor

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type FileHandler struct {
	ctx context.Context
}

func NewFileHandler() *FileHandler {
	return &FileHandler{}
}

func (f *FileHandler) Startup(ctx context.Context) {
	f.ctx = ctx
}

func (f *FileHandler) OpenFolder() string {
	selection, err := runtime.OpenDirectoryDialog(f.ctx, runtime.OpenDialogOptions{
		Title: "Select Project Folder",
	})
	if err != nil {
		return ""
	}
	return selection
}
