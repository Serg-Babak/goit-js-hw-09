import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

const formInputValues = {};

const handleFormInput = event => {
  if (event.target.name === 'delay') {
    formInputValues.delay = Number(event.target.value);
  }
  if (event.target.name === 'step') {
    formInputValues.step = Number(event.target.value);
  }
  if (event.target.name === 'amount') {
    formInputValues.amount = Number(event.target.value);
  }
  console.log(formInputValues);
};

const onClickSubmitBtn = e => {
  e.preventDefault();

  let delay = formInputValues.delay;
  let position = 0;
  for (let i = 0; i < formInputValues.amount; i += 1) {
    delay += formInputValues.step;
    position += 1;

    createPromise(position, delay);
    // e.currentTarget.reset();
    // Чомусь не працює через e.currentTarget.reset();
    form.reset();
  }
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  });
  promise.catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

form.addEventListener('input', handleFormInput);
submitBtn.addEventListener('click', onClickSubmitBtn);