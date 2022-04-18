import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

const map = (number: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

@customElement('orbiting-element')
export class OrbitElement extends LitElement {
  @property({ type: Number, reflect: true, attribute: "float-speed" }) public floatDur = 5;
  @property({ type: String, reflect: true, attribute: "float-amount" }) public floatAmount = '20px';
  @property({ type: Number, reflect: true }) public angle;
  @property({ type: Number, reflect: true }) public radius;
  @property({ type: Number, reflect: true, attribute: "speed" }) public rotationSpeed;
  @property({ type: Number, reflect: true }) public direction;

  public radian: number;

  static styles = css`
    :host {
      width: 75px;
      height: 75px;
      opacity: 0;
      transition: opacity 0.7s ease-in-out;
      animation: float var(--float-duration) ease-in-out infinite;
      --orbiting-element-shadow-color: rgba(0,0,0,0.7); 
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
        filter: drop-shadow(0px 5px 2px var(--orbiting-element-shadow-color));
        transform: translatey(0px);
      }
      50% {
        filter: drop-shadow(0px calc(5px + var(--float-amount)) calc(2px + var(--float-amount) / 6) var(--orbiting-element-shadow-color));
        transform: translatey(calc(-1 * var(--float-amount)));
      }
      100% {
        filter: drop-shadow(0px 5px 2px var(--orbiting-element-shadow-color));
        transform: translatey(0px);
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._setCustomCSSProps();
    this._randomAppearVisible();
  }

  _setCustomCSSProps() {
    this.style.setProperty('--float-duration', `${this.floatDur}s`);
    this.style.setProperty('--float-amount', `${this.floatAmount}`);
  }

  _randomAppearVisible() {
    setTimeout(() => {
      this.classList.add('visible');
    }, Math.random() * 500);
  }

  render() {
    return html`<slot></slot>`;
  }
}