let innerCarousel = document.querySelector(".My-carousel-inner"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  slides = innerCarousel.querySelectorAll(".My-carousel-item"),
  indicators = document.querySelectorAll(".indicators span"),
  currentSlid = slides[0],
  currentSlidIndex = 0,
  liInMenuCategory = document.querySelectorAll("#Menu .links li"),
  rowInMenu = document.querySelector("#Menu .content .row"),
  Part1InMenu = document.querySelector("#Menu .content .row .part1 .box"),
  Part2InMenu = document.querySelector("#Menu .content .row .part2 .box"),
  lineInMenu = document.querySelector("#Menu .content .row .line"),
  nav = document.querySelector("nav"),
  navLinks = nav.querySelectorAll(".links li a"),
  popupLinks = document.querySelectorAll('.popup[data-type="links"] .links li a'),
  sections = document.querySelectorAll("header, section"),
  booKingPopup = document.querySelector(`.popup[data-type="booking"]`),
  generalPopUp = document.querySelectorAll(".popup"),
  mainBoxInPopUp = document.querySelectorAll(".popup .box"),
  body = document.querySelector("body"),
  currentArrayDisplayed = [],
  selectedMeal = document.querySelector(`.popup[data-type="meals"] .content`),
  currentMealIndex,
  lode = document.querySelector(".lodging");

prevBtn.addEventListener("click", prevButton);
nextBtn.addEventListener("click", NextButton);
indicators.forEach(function (item, index) {
  item.addEventListener("click", function () {
    changeSlid(index);
    changeIndicator(index);
  });
});
let lastScroll = 0;
window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  if (currentScroll > lastScroll) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
  sections.forEach(function (section) {
    let sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id"),
      navActive = document.querySelector(`nav .links li a[href="#${sectionId}"]`),
      popupActive = document.querySelector(`.popup[data-type="links"] .links li a[href="#${sectionId}"]`);
    if (currentScroll >= section.offsetTop - 10 && currentScroll < section.offsetTop - 10 + sectionHeight) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        navActive.classList.add("active");
      });
      popupLinks.forEach(function (link) {
        link.classList.remove("active");
        link.previousElementSibling.classList.remove("active");
        popupActive.classList.add("active");
        popupActive.previousElementSibling.classList.add("active");
      });
    }
  });
});
window.addEventListener("DOMContentLoaded", function () {
  lode.classList.add("show");
  setTimeout(function () {
    lode.classList.remove("show");
  }, 4000);
  switchLinks();
});
document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    NextButton();
  }

  if (e.key === "ArrowLeft") {
    prevButton();
  }
});
// setInterval(NextButton, 10000);
liInMenuCategory.forEach(function (li, index) {
  li.addEventListener("click", function () {
    switchLinks(index);
    lastActive = document.querySelector("#Menu .links li.active");
    lastActive.classList.remove("active");
    li.classList.add("active");
    rowInMenu.classList.remove("active");
    lineInMenu.classList.remove("show");
  });
});
mainBoxInPopUp.forEach(function (box) {
  box.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
