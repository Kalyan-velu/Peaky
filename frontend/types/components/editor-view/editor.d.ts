import { LitElement } from 'lit';
export declare class EditorView extends LitElement {
    private editor?;
    private container;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    disconnectedCallback(): void;
}
declare global {
    export interface HTMLElementTagNameMap {
        'editor-view': EditorView;
    }
}
