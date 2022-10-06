import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const dataPicker = new flatpickr('#datetime-picker', options);
console.log(dataPicker.selectedDates[0]);

// const dateSelect = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start]');
// const daysNumber = document.querySelector('[data-days]');
// const hoursNumber = document.querySelector('[data-hours]');
// const minutesNumber = document.querySelector('[data-minutes]');
// const secondsNumber = document.querySelector('[data-seconds]');

// startBtn.addEventListener('click', onStart);
// dateSelect.addEventListener('focus', flatpickr);

// function onStart(e) {}
