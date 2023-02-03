import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const button = document.querySelector('button[data-start]');
const timer = document.querySelector('timer');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let selectedDate = null;
const now = new Date();

button.disabled = true;

const countDiff = obj => {
  selectedDate = new Date(obj[0]);
  if (selectedDate < now) {
    return Notiflix.Notify.failure('Please choose a date in the future');
  }
  button.disabled = false;
};

let intervalId = null;

const handleButtonBehaviour = e => {
  if (!selectedDate) return;
  intervalId = setInterval(count, 1000);
};

function count() {
  const diff = selectedDate - new Date();
  if (diff === 0) clearInterval(intervalId);
  const converted = convertMs(diff);
  days.textContent = converted.days;
  hours.textContent = addLeadingZero(converted.hours);
  minutes.textContent = addLeadingZero(converted.minutes);
  seconds.textContent = addLeadingZero(converted.seconds);
  button.disabled = true;
}

button.addEventListener('click', handleButtonBehaviour);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: countDiff,
};

flatpickr('#datetime-picker', options);

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

function addLeadingZero(number) {
  return String(number).padStart(2, 0);
}
