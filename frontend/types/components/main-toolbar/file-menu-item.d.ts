import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/divider/divider';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import 'iconify-icon/dist/iconify-icon';
import { LitElement } from 'lit';
export declare class FileMenuItem extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    private _openFolder;
    private _handleMenuSelect;
}
declare global {
    interface HTMLElementTagNameMap {
        'file-menu-item': FileMenuItem;
    }
}
