import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  Quit,
  WindowIsMaximised,
  WindowMinimise,
  WindowToggleMaximise,
} from '../../../wailsjs/runtime';
import 'iconify-icon/dist/iconify-icon';

@customElement('window-controls')
export class WindowControls extends LitElement {
  static styles = css`
    .window-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 100%;
      cursor: pointer;
      transition: background-color 0.2s;
      column-gap: 0;

      button {
        all: unset;
        display: flex;
        align-items: stretch;
        border: none;
        padding: 0.4em;

        &:hover {
          background-color: var(--hover-bg);
        }

        iconify-icon {
          display: inline;
          font-size: 0.8em;
          vertical-align: middle;
        }
        &[data-maximized='true'] #fullscreen {
          display: none;
        }
        &[data-maximized='false'] #fullscreen-exit {
          display: none;
        }
      }
    }
  `;

  @property({ type: Boolean })
  maximized = false;

  constructor() {
    super();
    void this._checkWindowIsMaximized();
    window.addEventListener('resize', async () => await this._checkWindowIsMaximized());
  }

  private async _checkWindowIsMaximized() {
    const isMaximized = await WindowIsMaximised();
    this.maximized = isMaximized;
    return isMaximized;
  }

  render() {
    return html`
      <div class="window-controls">
        <button @click="${WindowMinimise}" title="Minimize">
          <iconify-icon icon="mdi:minus"></iconify-icon>
        </button>
        <button
          @click="${WindowToggleMaximise}"
          data-maximized="${this.maximized}"
          title="Maximize">
          <iconify-icon id="fullscreen" icon="codicon:screen-full"></iconify-icon>
          <iconify-icon id="fullscreen-exit" icon="ci:copy"></iconify-icon>
        </button>
        <button class="close" @click="${Quit}" title="Close">
          <iconify-icon icon="maki:cross"></iconify-icon>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'window-controls': WindowControls;
  }
}
