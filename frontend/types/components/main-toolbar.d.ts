import { LitElement } from 'lit';
import 'iconify-icon/dist/iconify-icon';
import './main-toolbar/window-controls';
export declare class MainToolbar extends LitElement {
    static styles: import("lit").CSSResult;
    projectTitle: string;
    isMaximized: boolean;
    constructor();
    private _openFolder;
    private _toggleTheme;
    private _isMaximized;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-toolbar': MainToolbar;
    }
}
