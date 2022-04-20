import "../src/define-all.ts";
import { main, svg1, svg2, svg3, svg4 } from './icons.js';

export default {
  parameters: {
    layout: "centered",
  backgrounds: { default: 'rgb(23,23,23)' }
  },
};

const style = `
  <style>
    .wrap {
      text-align: center;
    }
    h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 100px;
    }
  </style>
`;

export const base = () => `
  ${style}
  <div class="wrap">
    <h1>We integrate with lots of tools</h1>
    <orbiter-element>
      ${main}
      <orbiting-element slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const pauseAllOnHover = () => `
  ${style}
  <div class="wrap">
    <h1>We integrate with lots of tools</h1>
    <orbiter-element pause-all-on-hover>
      ${main}
      <orbiting-element slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const sameDirection = () => `
  ${style}
  <div class="wrap">
    <h1>We integrate with lots of tools</h1>
    <orbiter-element>
      ${main}
      <orbiting-element direction="1" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const startDistributed = () => `
  ${style}
  <div class="wrap">
    <h1>Start with orbiting elements distributed</h1>
    <orbiter-element start-distributed>
      ${main}
      <orbiting-element direction="1" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const speed = () => `
  ${style}
  <div class="wrap">
    <h1>Change the speed of the orbiting elements</h1>
    <orbiter-element>
      ${main}
      <orbiting-element speed="1" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element speed="0.1" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element speed="0.5" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element speed="2" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const angle = () => `
  ${style}
  <div class="wrap">
    <h1>Change the starting angle of the orbiting elements</h1>
    <orbiter-element>
      ${main}
      <orbiting-element angle="180" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element angle="180" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element angle="180" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element angle="180" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const floatSpeed = () => `
  ${style}
  <div class="wrap">
    <h1>Change the float speed of the orbiting elements</h1>
    <orbiter-element>
      ${main}
      <orbiting-element float-speed="1" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element float-speed="0.1" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element float-speed="0.5" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element float-speed="2" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;

export const floatAmount = () => `
  ${style}
  <div class="wrap">
    <h1>Change the float height/amount of the orbiting elements</h1>
    <orbiter-element>
      ${main}
      <orbiting-element float-amount="20px" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element float-amount="5px" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element float-amount="50px" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element float-amount="0.75rem" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;


export const customElements = () => `
  ${style}
  <div class="wrap">
    <h1>Put in any element you like as orbiting elements</h1>
    <orbiter-element>
      ${main}
      <div style="width: 50px; height: 50px; background-color: lightsalmon" slot="orbiting"></div>
      <div style="width: 50px; height: 50px; background-color: lightsalmon" slot="orbiting"></div>
      <div style="width: 50px; height: 50px; background-color: lightsalmon" slot="orbiting"></div>
      <div style="width: 50px; height: 50px; background-color: lightsalmon" slot="orbiting"></div>
    </orbiter-element>
  </div>
`;