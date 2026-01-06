import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './style.css';
import 'iconify-icon';
import './components/main-toolbar/main-toolbar';
import './components/editor-view/editor';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import './components/editor-view/tabs-panel';
import { projectContext, ProjectContext } from '@/contexts/folder-context';
import { provide } from '@lit/context';
import { editor } from '@/go-runtime/models';

setBasePath('@shoelace-style/shoelace/dist/');

@customElement('main-view')
export class MainView extends LitElement {
  @provide({ context: projectContext })
  @property({ attribute: false })
  project: ProjectContext = {
    currentProject: null,
    content: null,
  };

  @property()
  resultText = 'No folder selected';

  override createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <main-toolbar @folder-selected="${this._handleFolderSelected}"></main-toolbar>
      <main>
        <div class="editor-wrapper">
          <editor-view></editor-view>
          <tabs-panel></tabs-panel>
        </div>
      </main>
    `;
  }

  private _handleFolderSelected(event: CustomEvent<editor.FolderContent>) {
    const folder = event.detail;
    this.project = {
      currentProject: folder?.file_path ?? null,
      content: folder,
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-view': MainView;
  }
}
