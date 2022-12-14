import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    dateSelector();
  },
};

const dataPicker = new flatpickr('#datetime-picker', options);

function dateSelector() {
  pickedDate = Date.parse(dataPicker.selectedDates[0]);

  if (pickedDate <= currentDate) {
    Notify.failure('Please choose a date in the future');
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

    addLeadingZero();

    stopTimer();
  }, 1000);
}

function stopTimer() {
  if (pickedDate - currentDate < 1000) {
    clearInterval(timerId);
  }
}

function addLeadingZero() {
  daysNumber.textContent = convertMs(ms).days.toString().padStart(2, '0');
  hoursNumber.textContent = convertMs(ms).hours.toString().padStart(2, '0');
  minutesNumber.textContent = convertMs(ms).minutes.toString().padStart(2, '0');
  secondsNumber.textContent = convertMs(ms).seconds.toString().padStart(2, '0');
}
