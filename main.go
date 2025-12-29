package main

import (
	"context"
	"embed"
	"peaky-editor/editor"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	fileHandler := editor.NewFileHandler()

	err := wails.Run(&options.App{
		Title:  "Peaky",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Frameless:        true,
		CSSDragProperty:  "--wails-draggable", // This tells Wails which CSS property makes an element draggable
		CSSDragValue:     "drag",
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup: func(ctx context.Context) {
			fileHandler.Startup(ctx)
		},
		Bind: []interface{}{
			fileHandler,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
