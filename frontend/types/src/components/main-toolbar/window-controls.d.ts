import { LitElement } from 'lit';
import 'iconify-icon/dist/iconify-icon';
export declare class WindowControls extends LitElement {
    static styles: import("lit").CSSResult;
    maximized: boolean;
    constructor();
    private _checkWindowIsMaximized;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'window-controls': WindowControls;
    }
}
