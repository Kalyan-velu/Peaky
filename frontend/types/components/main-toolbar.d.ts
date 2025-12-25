import { LitElement } from 'lit';
export declare class MainToolbar extends LitElement {
    static styles: import("lit").CSSResult;
    projectTitle: string;
    private _openFolder;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-toolbar': MainToolbar;
    }
}
