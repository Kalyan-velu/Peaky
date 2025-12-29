import { LitElement } from 'lit';
export declare class EditorView extends LitElement {
    private editor?;
    private container;
    createRenderRoot(): this;
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    export interface HTMLElementTagNameMap {
        'editor-view': EditorView;
    }
}
