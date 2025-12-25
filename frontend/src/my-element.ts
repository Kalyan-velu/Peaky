import {css, html, LitElement} from 'lit'
import {Greet} from "../wailsjs/go/main/App";
import {customElement, property} from 'lit/decorators.js'
import './style.css';
import './components/main-toolbar';

/**
 * An example element.
 */
@customElement('my-element')
export class MyElement extends LitElement {
    static styles = css`
        :host {
            display: block;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .result {
            height: 20px;
            line-height: 20px;
            margin: 1.5rem auto;
        }
    `

    @property()
    resultText = "No folder selected"

    private _handleFolderSelected(e: CustomEvent) {
        const folder = e.detail;
        Greet(`Folder Selected: ${folder}`).then(result => {
            this.resultText = result
        });
    }

    render() {
        return html`
            <main-toolbar @folder-selected="${this._handleFolderSelected}"></main-toolbar>
            <main>
                <div class="result" id="result">${this.resultText}</div>
            </main>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement
    }
}