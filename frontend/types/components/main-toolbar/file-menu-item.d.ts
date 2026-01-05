import { LitElement } from 'lit';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/divider/divider';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import 'iconify-icon/dist/iconify-icon';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
export declare class FileMenuItem extends LitElement {
    static styles: import("lit").CSSResult;
    private _openFolder;
    private _handleMenuSelect;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'file-menu-item': FileMenuItem;
    }
}
