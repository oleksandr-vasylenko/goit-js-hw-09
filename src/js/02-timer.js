import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
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
  },
};

const dataPicker = new flatpickr('#datetime-picker', options);
