const spanElem = document.querySelector("#value");

let counterValue = Number(spanElem.textContent);

const btnIncrement = document.querySelector('[data-action="increment"]');

const btnDecrement = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  console.log(counterValue);
  spanElem.textContent = `${counterValue}`;
};

const decrement = () => {
  counterValue -= 1;
  console.log(counterValue);
  spanElem.textContent = `${counterValue}`;
};

const btnIncrementEvent = btnIncrement.addEventListener("click", increment);

const btnDecrementEvent = btnDecrement.addEventListener("click", decrement);

// console.log(counterValue);
