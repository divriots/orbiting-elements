import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

const map = (number: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

@customElement('orbiting-element')
export class OrbitElement extends LitElement {
  @property({ type: Number, reflect: true, attribute: "float-speed" }) public floatDur;
  @property({ type: Number, reflect: true }) public angle;
  @property({ type: Number, reflect: true }) public radius;
  @property({ type: Number, reflect: true, attribute: "speed" }) public rotationSpeed;
  @property({ type: Number, reflect: true }) public direction;

  public radian: number;

  static styles = css`
    :host {
      --float-duration: 4s;
      width: 75px;
      height: 75px;
      opacity: 0;
      transition: opacity 0.7s ease-in-out;
      animation: float var(--float-duration) ease-in-out infinite;
    }

    :host(.visible) {
      opacity: 1;
    }

    :host(:hover) ::slotted(svg) {
      transform: scale(1.5);
      filter: none;
    }

    ::slotted(svg) {
      filter: grayscale();
      transition: all 0.3s ease-in-out;
    }

    @keyframes float {
      0% {
        filter: drop-shadow( 0px 5px 2px rgba(0, 0, 0, .7));
        transform: translatey(0px);
      }
      50% {
        filter: drop-shadow( 0px 25px 5px rgba(0, 0, 0, .7));
        transform: translatey(-20px);
      }
      100% {
        filter: drop-shadow( 0px 5px 2px rgba(0, 0, 0, .7));
        transform: translatey(0px);
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--float-duration', `${this.floatDur}s`);
    setTimeout(() => {
      this.classList.add('visible');
    }, Math.random() * 500);
  }

  render() {
    return html`<slot></slot>`;
  }
}