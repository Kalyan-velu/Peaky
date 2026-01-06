import type { SlMenuItem } from '@shoelace-style/shoelace';
import { OpenFolder } from '@/go-runtime/editor/Folder';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/divider/divider';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import 'iconify-icon/dist/iconify-icon';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('file-menu-item')
export class FileMenuItem extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-button {
      all: unset;
      display: flex;
      font-size: var(--sl-font-size-x-small);
      font-weight: 600;
      align-items: center;
      cursor: pointer;
    }
    sl-menu {
      padding: 0.2rem;
      min-width: 15em;
    }
    sl-menu-item::part(base) {
      color: var(--text-color);
      font-weight: 600;
      padding: 0;
      font-size: var(--sl-font-size-x-small);
    }
  `;

  render() {
    return html`
      <sl-dropdown distance="20">
        <button class="menu-button" slot="trigger">File</button>
        <sl-menu @sl-select="${this._handleMenuSelect}">
          <sl-menu-item value="new">New</sl-menu-item>
          <sl-menu-item value="open">Open ...</sl-menu-item>
          <sl-menu-item value="close">Close Project</sl-menu-item>
        </sl-menu>
      </sl-dropdown>
    `;
  }

  private async _openFolder() {
    const folder = await OpenFolder();

    if (folder) {
      this.dispatchEvent(
        new CustomEvent('folder-selected', {
          detail: folder,
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private async _handleMenuSelect(event: CustomEvent<{ item: SlMenuItem }>) {
    const item = event.detail.item;
    if (item.value === 'open') {
      await this._openFolder();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'file-menu-item': FileMenuItem;
  }
}
