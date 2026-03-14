let innerCarousel = document.querySelector(".My-carousel-inner"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  slides = innerCarousel.querySelectorAll(".My-carousel-item"),
  indicators = document.querySelectorAll(".indicators span"),
  currentSlid = slides[0],
  currentSlidIndex = 0;

prevBtn.addEventListener("click", prevButton);
nextBtn.addEventListener("click", NextButton);

indicators.forEach(function (item, index) {
  item.addEventListener("click", function () {
    changeSlid(index);
    changeIndicator(index);
  });
});
document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    NextButton();
  }

  if (e.key === "ArrowLeft") {
    prevButton();
  }
});
