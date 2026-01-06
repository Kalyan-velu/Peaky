import { LitElement } from 'lit';
import './style.css';
import 'iconify-icon';
import './components/main-toolbar/main-toolbar';
import './components/editor-view/editor';
import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import './components/editor-view/tabs-panel';
import { ProjectContext } from '@/contexts/folder-context';
export declare class MainView extends LitElement {
    project: ProjectContext;
    resultText: string;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
    private _handleFolderSelected;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-view': MainView;
    }
}
