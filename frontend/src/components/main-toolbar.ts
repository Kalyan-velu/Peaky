import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {WindowMinimise, WindowToggleMaximise, Quit} from "../../wailsjs/runtime";
import {SelectFolder} from "../../wailsjs/go/main/App";
import logo from '../assets/images/logo-universal.png';

@customElement('main-toolbar')
export class MainToolbar extends LitElement {
    static styles = css`
        :host {
            display: block;
            height: var(--toolbar-height);
            background-color: var(--toolbar-bg);
            color: var(--text-color);
            user-select: none;
            font-family: var(--font-family);
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            --wails-draggable: drag;
        }

        .left-section {
            display: flex;
            align-items: center;
            height: 100%;
            --wails-draggable: no-drag;
        }

        .right-section {
            display: flex;
            align-items: center;
            height: 100%;
            padding-right: 10px;
            --wails-draggable: no-drag;
        }

        .window-control {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 100%;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .window-control:hover {
            background-color: var(--hover-bg);
        }

        .window-control.close:hover {
            background-color: var(--close-hover-bg);
        }

        .logo {
            height: 20px;
            margin-right: 10px;
            pointer-events: none;
        }

        .project-title {
            font-size: 12px;
            margin-left: 10px;
            opacity: 0.8;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
        }

        .menu-dropdown {
            position: relative;
            display: inline-block;
        }

        .menu-button {
            padding: 0 10px;
            height: var(--toolbar-height);
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .menu-button:hover {
            background-color: var(--hover-bg);
        }

        .dropdown-content {
            display: none;
            position: absolute;
            right: 0;
            background-color: var(--toolbar-bg);
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 100;
            border: 1px solid var(--hover-bg);
        }

        .menu-dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-item {
            padding: 8px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
            text-align: left;
            font-size: 13px;
        }

        .dropdown-item:hover {
            background-color: var(--hover-bg);
        }
    `;

    @property()
    projectTitle = "No Project Open";

    private async _openFolder() {
        const folder = await SelectFolder();
        if (folder) {
            this.projectTitle = folder.split(/[\\/]/).pop() || folder;
            this.dispatchEvent(new CustomEvent('folder-selected', {
                detail: folder,
                bubbles: true,
                composed: true
            }));
        }
    }

    render() {
        return html`
            <nav class="toolbar">
                <div class="left-section">
                    <div class="window-control" @click="${() => WindowMinimise()}" title="Minimize">
                        <svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="10" height="1" fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="window-control" @click="${() => WindowToggleMaximise()}" title="Maximize">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="9" height="9" stroke="currentColor"/>
                        </svg>
                    </div>
                    <div class="window-control close" @click="${() => Quit()}" title="Close">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" stroke-width="1.2"/>
                        </svg>
                    </div>
                </div>

                <div class="right-section">
                    <img src="${logo}" class="logo" alt="Peaky Logo">
                    <div class="menu-dropdown">
                        <div class="menu-button">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="16" height="2" fill="currentColor"/>
                                <rect y="5" width="16" height="2" fill="currentColor"/>
                                <rect y="10" width="16" height="2" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="dropdown-content">
                            <div class="dropdown-item" @click="${this._openFolder}">Open Folder</div>
                        </div>
                    </div>
                    <div class="project-title">${this.projectTitle}</div>
                </div>
            </nav>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'main-toolbar': MainToolbar
    }
}
