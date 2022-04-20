import {html, css, LitElement} from 'lit';
import {property} from 'lit/decorators.js';

const map = (number: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// Orbiting elements can be customized with these props
export declare interface CustomOrbitingElement extends HTMLElement {
  radius: number;
  angle: number;
  radian: number;
  rotationSpeed: number;
  direction: -1 | 1;
  orbiting: boolean;
}

export class OrbiterElement extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'start-distributed' }) startDistributed = false;
  @property({ type: Boolean, reflect: true, attribute: 'pause-all-on-hover' }) pauseAllOnHover = false;

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

  constructor() {
    super();
    this.isHovering = false;
  }

  render() {
    return html`
      <div class="orbiter">
        <slot name="content"></slot>
        <slot name="orbiting" @mouseenter=${this.mouseEnter} @mouseleave=${this.mouseLeave} @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }

  protected handleSlotChange(ev) {
    const nodes = ev.target.assignedNodes() as CustomOrbitingElement[];
    nodes.forEach((node, i) => {
      this.handleNode(node, i, nodes.length);
    })
  }

  protected handleNode(node, nodeIndex, amountOfNodes) {
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

  protected setDefaultsIfUnset(el) {
    el.radius = el.radius ?? Math.min(map(Math.random(), 0, 1, 120, 180), window.innerWidth / 2 - 75); // Clamp by viewport width;
    el.angle = el.angle ?? Math.random() * 360;
    el.rotationSpeed = el.rotationSpeed ?? map(Math.random(), 0, 1, 0.2, 0.3);
    el.direction = el.direction ?? Math.random() > 0.5 ? 1 : -1;

    el.radian = el.angle * (Math.PI / 180);
    el.style.position = 'absolute';
  }

  protected setHoverListeners(node) {
    node.addEventListener('mouseenter', this.mouseEnter);
    node.addEventListener('mouseleave', this.mouseLeave);
  }

  protected changePosition(el) {
    if (!(this.pauseAllOnHover && this.isHovering) && !el.matches(':hover')) {
      el.radian += el.rotationSpeed * (Math.PI / 180) * el.direction;
      this.setPosition(el);
    }

    requestAnimationFrame(() => {
      this.changePosition(el);
    });
  }
  
  protected setPosition(el) {
    const y = el.radius * Math.sin(el.radian);
    const x = el.radius * Math.cos(el.radian);
    el.style.top = `${y}px`;
    el.style.left = `${x}px`;
  }

  protected mouseEnter(ev) {
    this.isHovering = true;
  }

  protected mouseLeave(ev) {
    this.isHovering = false;
  }
}