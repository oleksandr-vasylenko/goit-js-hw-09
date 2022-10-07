import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.dir(selectedDates[0]);
  },
};

const dataPicker = new flatpickr('#datetime-picker', options);
console.dir(dataPicker.selectedDates[0]);

// console.log(Date());

// console.log(Date.parse(Date()));

// console.log(Date.parse(options.defaultDate.toString()));

// console.log(Date.parse(Date()) < Date.parse(options.defaultDate.toString()));

// console.dir(dataPicker.selectedDates[0]);
// console.dir(JSON.stringify(dataPicker.selectedDates[0]));

// const dateSelect = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start]');
// const daysNumber = document.querySelector('[data-days]');
// const hoursNumber = document.querySelector('[data-hours]');
// const minutesNumber = document.querySelector('[data-minutes]');
// const secondsNumber = document.querySelector('[data-seconds]');

// startBtn.addEventListener('click', onStart);
// dateSelect.addEventListener('focus', flatpickr);

// function onStart(e) {}

// if (options.defaultDate.toString() >= Date()) {
//   console.log('you selected date ahead. please expect');
// } else {
//   console.log("you can't select date earlier than today");
// }
