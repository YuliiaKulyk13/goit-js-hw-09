function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('.data-start');
const btnStop = document.querySelector('.data-stop');

// let timerId = null;

// const changeColor = event => {
//   const colorFunction = getRandomHexColor();
//   timerId = setInterval(() => {
//     document.body.backgroundColor = colorFunction;
//   }, 1000);
// };

// btnStop.addEventListener('click', () => {
//   clearInterval(timerId);
// });

// btnStart.addEventListener('click', changeColor);
