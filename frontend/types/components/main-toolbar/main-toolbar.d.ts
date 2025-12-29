import { LitElement } from 'lit';
import 'iconify-icon/dist/iconify-icon';
import './window-controls';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
import './main-menu';
export declare class MainToolbar extends LitElement {
    static styles: import("lit").CSSResult;
    projectTitle: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-toolbar': MainToolbar;
    }
}
