import * as React from 'react';
import { render } from 'react-dom';
import { Counter } from './Counter';

class CounterCustomElement extends HTMLElement {
  connectedCallback() {
    render(
      <React.StrictMode>
        <Counter />
        <Counter />
      </React.StrictMode>,
      this,
    );
  }
}

if (!customElements.get('counter-custom-element')) {
  customElements.define('counter-custom-element', CounterCustomElement);
}
