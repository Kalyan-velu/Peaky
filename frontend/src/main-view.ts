import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './style.css';
import 'iconify-icon';
import './components/main-toolbar/main-toolbar';
import './components/editor-view/editor';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

setBasePath('@shoelace-style/shoelace/dist/');

@customElement('main-view')
export class MainView extends LitElement {
  override createRenderRoot() {
    return this;
  }

  @property()
  resultText = 'No folder selected';

  private async _handleFolderSelected(e: CustomEvent | PointerEvent) {
    let folder: string;
    if (e instanceof CustomEvent) {
      folder = e.detail;
    } else {
      const { OpenFolder } = await import('@/go-runtime/editor/FileHandler');

      folder = await OpenFolder();
    }
    if (folder) {
      this.resultText = folder;
    }
  }

  render() {
    return html`
      <main-toolbar @folder-selected="${this._handleFolderSelected}"></main-toolbar>
      <main>
        <div class="editor-wrapper">
          <editor-view></editor-view>
        </div>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-view': MainView;
  }
}
