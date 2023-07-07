const substractButtonElement = fragmentElement.querySelector('.counter-substract-button');
const outputElement = fragmentElement.querySelector('.counter-output');
const addButtonElement = fragmentElement.querySelector('.counter-add-button');

const update = (delta) => {
  const value = Number(outputElement.textContent);
  outputElement.textContent = value + delta;
};

substractButtonElement.addEventListener('click', () => update(-1));
addButtonElement.addEventListener('click', () => update(1));
