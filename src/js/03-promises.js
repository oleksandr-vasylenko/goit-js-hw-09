const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector("[name='amount']");
const createRef = document.querySelector('button');

let data = {};

delayRef.addEventListener('input', onDelayInput);
stepRef.addEventListener('input', onStepInput);
amountRef.addEventListener('input', onAmountInput);
createRef.addEventListener('click', createPromise);

function onDelayInput(e) {
  data[e.target.name] = e.target.value;
}

function onStepInput(e) {
  data[e.target.name] = e.target.value;
}

function onAmountInput(e) {}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
