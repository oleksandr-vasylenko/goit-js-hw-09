import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysNumber = document.querySelector('[data-days]');
const hoursNumber = document.querySelector('[data-hours]');
const minutesNumber = document.querySelector('[data-minutes]');
const secondsNumber = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', '');

let pickedDate = 0;
let currentDate = new Date().getTime();
let ms = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.dir(selectedDates[0]);
    dateSelector();
  },
};

const dataPicker = new flatpickr('#datetime-picker', options);

function dateSelector() {
  pickedDate = Date.parse(dataPicker.selectedDates[0]);

  if (pickedDate <= currentDate) {
    window.alert('Please choose a date in the future');
  } else {
    startBtn.removeAttribute('disabled', '');
  }
}

function convertMs(ms) {
  ms = pickedDate - currentDate;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onStart);

function onStart() {
  timerId = setInterval(() => {
    currentDate = new Date().getTime();
    daysNumber.textContent = convertMs(ms).days;
    hoursNumber.textContent = convertMs(ms).hours;
    minutesNumber.textContent = convertMs(ms).minutes;
    secondsNumber.textContent = convertMs(ms).seconds;
    stopTimer();
  }, 1000);
}

function stopTimer() {
  console.log(ms);
  if (pickedDate - currentDate < 1000) {
    clearInterval(timerId);
  }
}
