import { packd_export_3 } from 'https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib';const { __decorate,__metadata } = packd_export_3;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib';const { html,css,LitElement } = packd_export_0;;
import { packd_export_2 } from 'https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib';const { property } = packd_export_2;;
const map = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
export class OrbiterElement extends LitElement {
    constructor() {
        super();
        this.startDistributed = false;
        this.pauseAllOnHover = false;
        this.isHovering = false;
    }
    render() {
        return html `
      <div class="orbiter">
        <slot name="content"></slot>
        <slot name="orbiting" @mouseenter=${this.mouseEnter} @mouseleave=${this.mouseLeave} @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
    }
    handleSlotChange(ev) {
        const nodes = ev.target.assignedNodes();
        nodes.forEach((node, i) => {
            this.handleNode(node, i, nodes.length);
        });
    }
    handleNode(node, nodeIndex, amountOfNodes) {
        if (node.orbiting) {
            return; // node already initialized
        }
        this.setHoverListeners(node);
        this.setDefaultsIfUnset(node);
        // Start them off as distributed along the circle
        if (this.startDistributed) {
            node.radian = 360 / amountOfNodes * nodeIndex * (Math.PI / 180);
        }
        this.setPosition(node);
        requestAnimationFrame(() => {
            this.changePosition(node);
        });
        node.orbiting = true;
    }
    setDefaultsIfUnset(el) {
        var _a, _b, _c, _d;
        el.radius = (_a = el.radius) !== null && _a !== void 0 ? _a : Math.min(map(Math.random(), 0, 1, 120, 180), window.innerWidth / 2 - 75); // Clamp by viewport width;
        el.angle = (_b = el.angle) !== null && _b !== void 0 ? _b : Math.random() * 360;
        el.rotationSpeed = (_c = el.rotationSpeed) !== null && _c !== void 0 ? _c : map(Math.random(), 0, 1, 0.2, 0.3);
        el.direction = ((_d = el.direction) !== null && _d !== void 0 ? _d : Math.random() > 0.5) ? 1 : -1;
        el.radian = el.angle * (Math.PI / 180);
        el.style.position = 'absolute';
    }
    setHoverListeners(node) {
        node.addEventListener('mouseenter', this.mouseEnter);
        node.addEventListener('mouseleave', this.mouseLeave);
    }
    changePosition(el) {
        if (!(this.pauseAllOnHover && this.isHovering) && !el.matches(':hover')) {
            el.radian += el.rotationSpeed * (Math.PI / 180) * el.direction;
            this.setPosition(el);
        }
        requestAnimationFrame(() => {
            this.changePosition(el);
        });
    }
    setPosition(el) {
        const y = el.radius * Math.sin(el.radian);
        const x = el.radius * Math.cos(el.radian);
        el.style.top = `${y}px`;
        el.style.left = `${x}px`;
    }
    mouseEnter(ev) {
        this.isHovering = true;
    }
    mouseLeave(ev) {
        this.isHovering = false;
    }
}
OrbiterElement.styles = css `
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
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'start-distributed' }),
    __metadata("design:type", Object)
], OrbiterElement.prototype, "startDistributed", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'pause-all-on-hover' }),
    __metadata("design:type", Object)
], OrbiterElement.prototype, "pauseAllOnHover", void 0);
//# sourceMappingURL=OrbiterElement.js.map