import { LitElement } from 'lit';
import './style.css';
import 'iconify-icon';
import './components/main-toolbar/main-toolbar';
import './components/editor-view/editor';
import '@shoelace-style/shoelace/dist/shoelace.js';
export declare class MainView extends LitElement {
    createRenderRoot(): this;
    resultText: string;
    private _handleFolderSelected;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-view': MainView;
    }
}
