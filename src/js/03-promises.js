const button = document.querySelector('button');

const submitPromise = e => {
  e.preventDefault();

  const delayInput = document.querySelector("input[name='delay']").value;
  const stepInput = document.querySelector('input[name="step"]').value;
  const amountInput = document.querySelector('input[name="amount"]').value;

  let counter = 0;
  let intervalId = null;

  intervalId = setInterval(() => {
    counter++;

    if (counter === +amountInput) {
      clearInterval(intervalId);
    }
    createPromise(counter, delayInput)
      .then(value => {
        console.log(value);
      })
      .catch(error => {
        console.error(error);
      });
  }, stepInput);
};

button.addEventListener('click', submitPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
