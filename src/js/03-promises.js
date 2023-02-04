import Notiflix from 'notiflix';

const button = document.querySelector('button');

const submitPromise = e => {
  e.preventDefault();

  const delayInput = document.querySelector("input[name='delay']").value;
  const stepInput = document.querySelector('input[name="step"]').value;
  const amountInput = document.querySelector('input[name="amount"]').value;

  let counter = 0;
  let intervalId = null;

  setTimeout(() => {
    createPromise(counter, delayInput)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });

    intervalId = setInterval(() => {
      counter++;

      if (counter + 1 === +amountInput) {
        clearInterval(intervalId);
      }
      createPromise(counter, +delayInput + stepInput * counter)
        .then(value => {
          Notiflix.Notify.success(value);
        })
        .catch(error => {
          Notiflix.Notify.failure(error);
        });
    }, stepInput);
  }, delayInput);
};

button.addEventListener('click', submitPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
