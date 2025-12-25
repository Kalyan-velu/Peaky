import { LitElement } from 'lit';
import './style.css';
import './components/main-toolbar';
/**
 * An example element.
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    resultText: string;
    private _handleFolderSelected;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
