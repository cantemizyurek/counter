const containerElement = document.querySelector('.container');

const valueElement = containerElement.querySelector('#value');
const decreaseElement = containerElement.querySelector('.decrease');
const increaseElement = containerElement.querySelector('.increase');
const resetElement = containerElement.querySelector('.reset');

const counter = (valueElement, inc, dec, res) => {
  inc.addEventListener('click', () => {
    valueElement.innerHTML = +valueElement.innerHTML + 1;

    if (+valueElement.innerHTML < 0) {
      valueElement.style.color = 'red';
    } else if (+valueElement.innerHTML > 0) {
      valueElement.style.color = 'green';
    } else {
      valueElement.style.color = '';
    }
  });
  dec.addEventListener('click', () => {
    valueElement.innerHTML = +valueElement.innerHTML - 1;

    if (+valueElement.innerHTML < 0) {
      valueElement.style.color = 'red';
    } else if (+valueElement.innerHTML > 0) {
      valueElement.style.color = 'green';
    } else {
      valueElement.style.color = '';
    }
  });
  res.addEventListener('click', () => {
    valueElement.innerHTML = 0;
    valueElement.style.color = '';
  });
};

counter(valueElement, increaseElement, decreaseElement, resetElement);
