function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let bcgColor = '';

const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStart);

function onStart() {
  timerID = setInterval(() => {
    let bcgColor = getRandomHexColor();
    document.body.style.backgroundColor = bcgColor;
  }, 1000);
  startBtn.setAttribute('disabled', '');
}

stoptBtn.addEventListener('click', onStop);

function onStop() {
  clearInterval(timerID);
  startBtn.removeAttribute('disabled');
}
