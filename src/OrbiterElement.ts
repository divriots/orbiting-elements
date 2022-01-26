import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('orbiter-element')
export class OrbiterElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .orbiter {
      display: inline-block;
      position: relative;
    }

    ::slotted([slot="content"]) {
      width: 75px;
    }
  `;

  render() {
    return html`
      <div class="orbiter">
        <slot name="content"></slot>
        <slot name="orbiting"></slot>
      </div>
    `;
  }
}