import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'iconify-icon/dist/iconify-icon';
import './window-controls';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
import './file-menu-item';

@customElement('main-toolbar')
export class MainToolbar extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: min(2rem, var(--toolbar-height));
      max-height: var(--toolbar-height);
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
      padding: 0 0.5rem 0 1rem;
      --wails-draggable: no-drag;
      .text-menu-item {
        align-self: end;
      }
    }

    .logo {
      height: 20px;
      margin-right: 10px;
      pointer-events: none;
    }
  `;

  @property()
  projectTitle = 'No Project Open';

  render() {
    return html`
      <nav class="toolbar">
        <div class="left-section">
          <file-menu-item class="text-menu-item"></file-menu-item>
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
