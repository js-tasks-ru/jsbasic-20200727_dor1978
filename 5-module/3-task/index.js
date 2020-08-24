function initCarousel() {
  let inner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let width = inner.offsetWidth;

  let count = 0;
  arrowLeft.style.display = 'none';

  function translateRight() {
    inner.style.transform = `translateX(${-(count + 1) * width}px)`;

    count++;

    if (count > 0) {
      arrowLeft.style.display = '';
    }
    if (count === 3) {
      arrowRight.style.display = 'none';
    }
  }

  function translateLeft() {
    inner.style.transform = `translateX(${-(count - 1) * width}px)`;

    count--;

    if (count < 3) {
      arrowRight.style.display = '';
    }
    if (count === 0) {
      arrowLeft.style.display = 'none';
    }
  }

  arrowRight.addEventListener('click', translateRight);
  arrowLeft.addEventListener('click', translateLeft);
}


