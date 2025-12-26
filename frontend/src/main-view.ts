import { html, LitElement } from 'lit';
import { Greet } from '../wailsjs/go/main/App';
import { customElement, property } from 'lit/decorators.js';
import './style.css';
import 'iconify-icon';
import './components/main-toolbar/main-toolbar';
import './components/editor-view/editor';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/shoelace.js';

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
      const { SelectFolder } = await import('../wailsjs/go/main/App');

      folder = await SelectFolder();
    }
    if (folder) {
      Greet(`Folder Selected: ${folder}`).then((result) => {
        this.resultText = result;
      });
    }
  }

  render() {
    return html`
      <main-toolbar @folder-selected="${this._handleFolderSelected}"></main-toolbar>
      <main>
        <editor-view></editor-view>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-view': MainView;
  }
}
