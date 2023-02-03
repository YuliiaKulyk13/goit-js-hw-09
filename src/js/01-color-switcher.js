function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disabledBtn(on, off) {
  btnStart.disabled = on;
  btnStop.disabled = off;
}

const btnStart = document.querySelector('button[data-start]');
console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);

let timerId = null;

const changeColor = () => {
  disabledBtn(true, false);
  document.body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

btnStop.addEventListener('click', () => {
  disabledBtn(false, true);
  clearInterval(timerId);
});

btnStart.addEventListener('click', changeColor);
