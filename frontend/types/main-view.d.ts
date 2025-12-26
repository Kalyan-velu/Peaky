import { LitElement } from 'lit';
import './style.css';
import 'iconify-icon';
import './components/main-toolbar/main-toolbar';
import './components/editor-view/editor';
import '@shoelace-style/shoelace/dist/shoelace.js';
export declare class MainView extends LitElement {
    static styles: import("lit").CSSResult;
    resultText: string;
    private _handleFolderSelected;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-view': MainView;
    }
}
