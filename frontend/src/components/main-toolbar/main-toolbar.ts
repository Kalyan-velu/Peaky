import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { WindowIsMaximised } from '../../../wailsjs/runtime';
import 'iconify-icon/dist/iconify-icon';
import './window-controls';
import { OpenFolder } from '../../../wailsjs/go/editor/FileHandler';

@customElement('main-toolbar')
export class MainToolbar extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: min(2rem, var(--toolbar-height));
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

    .right-section {
      display: flex;
      align-items: center;
      height: 100%;
      --wails-draggable: no-drag;
    }

    .left-section {
      display: flex;
      align-items: center;
      height: 100%;
      padding-right: 10px;
      --wails-draggable: no-drag;
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
      left: 0;
      background-color: var(--toolbar-bg);
      min-width: 160px;
      box-shadow: var(--sl-shadow-medium);
      z-index: 100;
      border: 1px solid var(--border-color);
      border-radius: var(--sl-border-radius-medium);
      margin-top: 4px;
    }

    .menu-dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown-item {
      padding: var(--sl-spacing-x-small) var(--sl-spacing-medium);
      text-decoration: none;
      display: block;
      cursor: pointer;
      text-align: left;
      font-size: 13px;
      color: var(--text-color);
    }

    .dropdown-item:hover {
      background-color: var(--hover-bg);
    }
  `;

  @property()
  projectTitle = 'No Project Open';

  @property({ type: Boolean })
  isMaximized = false;

  constructor() {
    super();
    void this._isMaximized();
    window.addEventListener('resize', async () => {
      this.isMaximized = await this._isMaximized();
    });
  }

  private async _openFolder() {
    const folder = await OpenFolder();
    if (folder) {
      this.projectTitle = folder.split(/[\\/]/).pop() || folder;
      this.dispatchEvent(
        new CustomEvent('folder-selected', {
          detail: folder,
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private _toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('sl-theme-dark')) {
      html.classList.replace('sl-theme-dark', 'sl-theme-light');
    } else {
      html.classList.replace('sl-theme-light', 'sl-theme-dark');
    }
  }

  private async _isMaximized() {
    const maximized = await WindowIsMaximised();
    this.isMaximized = maximized;
    return maximized;
  }

  render() {
    return html`
      <nav class="toolbar">
        <div class="left-section">
          <iconify-icon icon="mdi:home"></iconify-icon>
          <div class="menu-dropdown">
            <div class="menu-button">
              <iconify-icon icon="mdi:menu"></iconify-icon>
            </div>
            <div class="dropdown-content">
              <div class="dropdown-item" @click="${this._openFolder}">Open Folder</div>
              <div class="dropdown-item" @click="${this._toggleTheme}">Toggle Theme</div>
            </div>
          </div>
          <div class="project-title">${this.projectTitle}</div>
        </div>
        <div class="right-section">
          <window-controls></window-controls>
        </div>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-toolbar': MainToolbar;
  }
}
