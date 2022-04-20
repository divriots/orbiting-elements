import { packd_export_3 } from 'https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib';const { __decorate,__metadata } = packd_export_3;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib';const { html,css,LitElement } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib';const { property } = packd_export_2;;
const map = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
export class OrbitingElement extends LitElement {
    constructor() {
        super(...arguments);
        this.floatDur = 5;
        this.floatAmount = '20px';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setCustomCSSProps();
        this.randomAppearVisible();
    }
    setCustomCSSProps() {
        this.style.setProperty('--float-duration', `${this.floatDur}s`);
        this.style.setProperty('--float-amount', `${this.floatAmount}`);
    }
    randomAppearVisible() {
        setTimeout(() => {
            this.classList.add('visible');
        }, Math.random() * 500);
    }
    render() {
        return html `<slot></slot>`;
    }
}
OrbitingElement.styles = css `
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
__decorate([
    property({ type: Number, reflect: true, attribute: "float-speed" }),
    __metadata("design:type", Object)
], OrbitingElement.prototype, "floatDur", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: "float-amount" }),
    __metadata("design:type", Object)
], OrbitingElement.prototype, "floatAmount", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], OrbitingElement.prototype, "angle", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], OrbitingElement.prototype, "radius", void 0);
__decorate([
    property({ type: Number, reflect: true, attribute: "speed" }),
    __metadata("design:type", Object)
], OrbitingElement.prototype, "rotationSpeed", void 0);
__decorate([
    property({ type: Number, reflect: true }),
    __metadata("design:type", Object)
], OrbitingElement.prototype, "direction", void 0);
//# sourceMappingURL=OrbitingElement.js.map