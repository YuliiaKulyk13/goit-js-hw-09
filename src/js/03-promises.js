import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const submitForm = e => {
  e.preventDefault();

  let delayInput = Number(e.currentTarget.delay.value);
  const stepInput = Number(e.currentTarget.step.value);
  const amountInput = Number(e.currentTarget.amount.value);

  for (let position = 1; position <= amountInput; position += 1) {
    createPromise(position, delayInput).then().catch();
    delayInput += stepInput;
  }
};

function createPromise(position, delayInput) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delayInput}ms`
          )
        );
      } else {
        reject(
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delayInput}ms`
          )
        );
      }
    }, delayInput);
  });
}

form.addEventListener('submit', submitForm);

//   setTimeout(() => {
//     createPromise(counter, delayInput)
//       .then(value => {
//         Notiflix.Notify.success(value);
//       })
//       .catch(error => {
//         Notiflix.Notify.failure(error);
//       });

//     intervalId = setInterval(() => {
//       counter++;

//       if (counter === +amountInput) {
//         clearInterval(intervalId);
//       }
//       createPromise(counter, +delayInput + stepInput * counter)
//         .then(value => {
//           Notiflix.Notify.success(value);
//         })
//         .catch(error => {
//           Notiflix.Notify.success(error);
//         });
//     }, stepInput);
//   }, delayInput);
// };
