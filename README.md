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