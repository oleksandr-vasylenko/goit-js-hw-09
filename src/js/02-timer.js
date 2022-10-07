import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysNumber = document.querySelector('[data-days]');
const hoursNumber = document.querySelector('[data-hours]');
const minutesNumber = document.querySelector('[data-minutes]');
const secondsNumber = document.querySelector('[data-seconds]');
// const dateSelect = document.querySelector('#datetime-picker');

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.dir(selectedDates[0]);

    let pickedDate = Date.parse(dataPicker.selectedDates[0]);
    let currentDate = new Date().getTime();

    if (pickedDate <= currentDate) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled', '');
    }
    let ms = pickedDate - currentDate;

    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }

    startBtn.addEventListener('click', onStart);

    function onStart() {
      daysNumber.textContent = convertMs(ms).days;
      hoursNumber.textContent = convertMs(ms).hours;
      minutesNumber.textContent = convertMs(ms).minutes;
      secondsNumber.textContent = convertMs(ms).seconds;
    }
  },
};

const dataPicker = new flatpickr('#datetime-picker', options);
