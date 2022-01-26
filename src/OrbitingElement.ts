import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

const map = (number: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

@customElement('orbiting-element')
export class OrbitElement extends LitElement {
  @property({ type: Number, reflect: true }) public floatDur;
  @property({ type: Number, reflect: true }) public radian;
  @property({ type: Number, reflect: true }) public radius;
  @property({ type: Number, reflect: true }) public rotationSpeed;
  @property({ type: Number, reflect: true }) public direction;

  static styles = css`
    :host {
      --float-duration: 4s;
      position: absolute;
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
  
  constructor() {
    super();
    this.floatDur = map(Math.random() * 6, 0, 6, 2, 4);
    this.radian = (Math.random() * 360) * (Math.PI / 180);
    // Clamp by viewport width
    this.radius = Math.min(map(Math.random(), 0, 1, 150, 200), window.innerWidth / 2 - 75);
    this.rotationSpeed = map(Math.random(), 0, 1, 0.04, 0.12);
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.style.setProperty('--float-duration', `${this.floatDur}s`);
    setTimeout(() => {
      this.classList.add('visible');
    }, Math.random() * 500)
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.setPosition();
    setInterval(() => {
      if (!this.matches(':hover')) { 
        this.radian += this.rotationSpeed * (Math.PI / 180) * this.direction;
        this.setPosition();
      }
    });
  }
  
  setPosition() {
    const y = this.radius * Math.sin(this.radian);
    const x = this.radius * Math.cos(this.radian);
    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
  }

  render() {
    return html`<div class="logo-wrap"><slot></slot></div>`
  }
}