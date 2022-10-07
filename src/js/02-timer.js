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
console.log(dataPicker.selectedDates[0]);

console.log(new Date().getTime());
