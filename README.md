# Orbiting Elements

<p>
  <a href="https://divRIOTS.com">Brought to you by<br/></a>
  <a href="https://divRIOTS.com#gh-light-mode-only">
    <img width="150" height="40" src="https://divRIOTS.com/divriots.svg" alt="‹div›RIOTS" />
  </a>
  <a href="https://divRIOTS.com#gh-dark-mode-only">
    <img width="150" height="40" src="https://divRIOTS.com/divriots-dark.svg" alt="‹div›RIOTS" />
  </a>
</p>

A Web Component that orbits a certain number of elements around a core element.

Fully flexible to add your own core element or orbiting elements, see demos for advanced use cases.

[See landing page](https://divriots.github.io/orbiting-elements/)

[See the full demos & code](https://webcomponents.dev/edit/K4nq9IUNbvXxLX7C1Z0r/stories/index.stories.js)


## Usage

```sh
npm i @divriots/orbiting-elements
```

```js
// CE definition for orbiter-element / orbiting-element
import '@divriots/orbiting-elements/define';

// In case you only want to define the orbiter element or orbiting element separately
import '@divriots/orbiting-elements/define-orbiter-element';
import '@divriots/orbiting-elements/define-orbiting-element';

// Using the base classes (e.g. for extension)
import { OrbiterElement, OrbitingElement } '@divriots/orbiting-elements';
```

```html
<orbiter-element>
  <svg>...</svg>
  <orbiting-element slot="orbiting"><svg>...</svg></orbiting-element>
  <orbiting-element slot="orbiting"><svg>...</svg></orbiting-element>
  <orbiting-element slot="orbiting"><svg>...</svg></orbiting-element>
  <orbiting-element slot="orbiting"><svg>...</svg></orbiting-element>
</orbiter-element>
```

## Features

These features are specific to the orbiter-element or its assigned nodes (orbiting slottables).

- Orbiting elements pause on hover, use `pause-all-on-hover` attribute on the `orbiter-element` to make every orbiting element pause when a single one gets hovered.
- Use `direction` property (-1 or 1) on the orbiting elements to configure clockwise or counter-clockwise orbit direction.
- Use `start-distributed` attribute on the `orbiter-element` to make all orbiting elements start off with equal spacing between one another.
- Use `rotationSpeed` property on the orbiting elements to configure the rotation speed.
- Use `angle` property on the orbiting elements to configure at which angle they start rotating.
- Use `radian` property on the orbiting elements to set their current position to a different angle, this property is meant more as a private prop and must be in the range of 0 and 2 PI.

These features are specific to the `orbiting-element` but not coupled to the implementation details of the `orbiter-element`.

- Use `float-speed` attribute on the `orbiting-element` to configure how fast it floats up and down.
- Use `float-amount` attribute on the `orbiting-element` to configure how much it floats up and down.
