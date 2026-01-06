import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import * as monaco from 'monaco-editor';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';

// import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label: string) {
    // if (label === 'json') {
    //   return new jsonWorker();
    // }
    // if (label === 'css' || label === 'scss' || label === 'less') {
    //   return new cssWorker();
    // }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    // if (label === 'typescript' || label === 'javascript') {
    //   return new tsWorker();
    // }
    return new editorWorker();
  },
};

@customElement('editor-view')
export class Editor extends LitElement {
  private editor?: monaco.editor.ICodeEditor;

  @query('#container')
  private container!: HTMLElement;

  override createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this.editor = monaco.editor.create(this.container, {
      value: `<div>Hello World</div>`,
      language: 'html',
      theme: 'vs-dark',
      automaticLayout: true,
    });
  }

  disconnectedCallback() {
    this.editor?.dispose();
    this.editor = undefined;
    super.disconnectedCallback();
  }
  render() {
    return html`<div id="container"></div> `;
  }
}

declare global {
  export interface HTMLElementTagNameMap {
    'editor-view': Editor;
  }
}
