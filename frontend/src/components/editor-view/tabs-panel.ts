import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('tabs-panel')
export class TabsPanel extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      bottom: 0.25em;
      left: 0.5em;
      right: 0.5em;
      z-index: 50;
      padding: 0.25em;
      display: inline-flex;
      align-items: center;
      background-color: #ffffff;
      box-shadow: var(
        --sl-shadow-x-small,
        0 1px 2px rgb(0 0 0 / 0.1) inset,
        0 0 0 1px rgb(0 0 0 / 0.02) inset
      );
      justify-content: start;
      border-radius: 0.4em;
      backdrop-filter: blur(10px);
    }
    .tab {
      width: max(100px);
      min-width: 80px;
      height: 2em;
      display: flex;
      font-size: 0.8em;
      align-items: center;
      justify-content: center;
      color: var(--sl-color-primary-500);
      font-weight: 600;
      background-color: var(--sl-panel-border-color-neutral);
      border-radius: 0.25em;
      &:not(:last-child) {
        margin-right: 0.5em;
      }

      &:hover {
        outline: 2px solid var(--sl-color-primary-500);
        cursor: pointer;
      }
    }
  `;

  render() {
    return html`
      <div class="tab">Test.txt</div>
      <div class="tab">Test.txt</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tabs-panel': TabsPanel;
  }
}
