import { LitElement } from 'lit';
export declare class EditorView extends LitElement {
    private editor?;
    private container;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
    firstUpdated(): void;
    disconnectedCallback(): void;
}
declare global {
    export interface HTMLElementTagNameMap {
        'editor-view': EditorView;
    }
}
