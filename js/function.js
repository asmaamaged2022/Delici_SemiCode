function NextButton() {
  currentSlid = document.querySelector(`.My-carousel-item[data-index="${currentSlidIndex}"]`);
  let nextSlid = currentSlid.nextElementSibling ?? innerCarousel.querySelector(".My-carousel-item:first-of-type");
  currentSlidIndex = nextSlid.dataset.index;
  changeSlid(nextSlid.dataset.index);
  changeIndicator(currentSlidIndex);
}
function prevButton() {
  currentSlid = document.querySelector(`.My-carousel-item[data-index="${currentSlidIndex}"]`);
  let prevSlid = currentSlid.previousElementSibling ?? innerCarousel.querySelector(".My-carousel-item:last-of-type");
  currentSlidIndex = prevSlid.dataset.index;
  changeSlid(prevSlid.dataset.index);
  changeIndicator(currentSlidIndex);
}
function changeIndicator(index) {
  let currentSpan = document.querySelector(".indicators span.active");
  currentSpan.classList.remove("active");
  indicators[index].classList.add("active");
  // change value in var currentSlid
  currentSlidIndex = index;
}
function changeSlid(index) {
  let current = currentSlid,
    nextSlide = document.querySelector(`.My-carousel-item[data-index="${index}"]`);
  // change value in var currentSlid
  currentSlid = nextSlide;
  current.classList.remove("active");
  nextSlide.classList.add("active");
  changeIndicator(index);
}
