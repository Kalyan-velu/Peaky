# Peaky - An Editor

Peaky is a lightweight, high-performance desktop code editor built with a focus on simplicity, speed, and ease of use. It leverages the power of **Wails** to provide a native desktop experience with a modern web-based frontend.

## Tech Stack

- **Backend:** [Go](https://go.dev/) (powered by [Wails](https://wails.io/))
- **Frontend:** [Lit](https://lit.dev/) (Web Components), [Vite](https://vitejs.dev/)
- **Editor Engine:** [Monaco Editor](https://microsoft.github.io/monaco-editor/) (the engine behind VS Code)
- **UI Components:** [Shoelace](https://shoelace.style/)
- **Icons:** [Iconify](https://iconify.design/)

##  Features

- **Native Desktop Experience:** Built with Wails for cross-platform support.
- **Advanced Code Editing:** Full support for syntax highlighting and intelligent code editing via Monaco.
- **Modern UI:** A clean, frameless interface with custom window controls and theme support.
- **Fast & Lightweight:** Optimized for performance with a small resource footprint.
- **Web Worker Powered:** Uses Web Workers for heavy editor tasks to keep the UI responsive.

## 🛠️ Getting Started

### Prerequisites

- [Go](https://go.dev/dl/) (1.18+)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Wails CLI](https://wails.io/docs/gettingstarted/installation)

### Development

To run the application in development mode with live-reloading:

```bash
wails dev
```

### Build

To create a production build of the application:

```bash
wails build
```

## 📂 Project Structure

- `app.go`: Backend logic and Wails bindings.
- `main.go`: Application entry point and configuration.
- `frontend/`: Frontend source code (Lit + Vite).
  - `src/components/editor-view/`: Monaco Editor integration.
  - `src/components/main-toolbar/`: Custom toolbar and window controls.

---

Created by [Kalyan Jyoti Borah](mailto:kalyanborah456@gmail.com).


