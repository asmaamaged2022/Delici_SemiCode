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
function switchLinks(index = 0) {
  setTimeout(function () {
    rowInMenu.classList.add("active");
    lineInMenu.classList.add("show");
  }, 100);
  switch (index) {
    case 0:
      ShowMeals(BreakFast);
      currentArrayDisplayed = BreakFast;
      break;
    case 1:
      ShowMeals(Lunch);
      currentArrayDisplayed = Lunch;
      break;
    case 2:
      ShowMeals(Dinner);
      currentArrayDisplayed = Dinner;
      break;
    case 3:
      ShowMeals(Drinks);
      currentArrayDisplayed = Drinks;
      break;
  }
}
function ShowMeals(Meals) {
  Part1InMenu.innerHTML = "";
  Part2InMenu.innerHTML = "";
  Meals.forEach(function (Meal, index) {
    if (index < Math.ceil(Meals.length / 2)) {
      Part1InMenu.innerHTML += `
     ${ShowItemInMenu(Meal, index, Meals.length)}
     `;
    } else {
      Part2InMenu.innerHTML += `
     ${ShowItemInMenu(Meal, index, Meals.length)}
     `;
    }
  });
}
function ShowItemInMenu(item, index, arrLen) {
  return `
  <div class="item ${index == Math.ceil(arrLen / 2) - 1 || index == arrLen - 1 ? "mb-5 mb-md-0" : "mb-5"}">
      <div class="image rounded-4 overflow-hidden">
        <img src="images/${item.images[0]}" alt=""/>
        <div class="layout"><i class="fa-regular fa-square-plus" onclick="openPopup('meals',this)" data-index="${index}"></i></div>
      </div>
      <div class="info text-start ms-4">
        <div class="head mb-2">
          <h5 class="name mainColor mb-0">${item.name}</h5>
          <div class="lines mx-2"><span class="mb-1"></span><span></span></div>
          <h5 class="price mainColor mb-0">${item.price}</h5>
        </div>
        <div class="body">${item.miniDescription}</div>
      </div>
    </div>
`;
}
function openPopup(type, that) {
  targetPopUp = document.querySelector(`.popup[data-type="${type}"]`);
  targetPopUp.classList.add("active");
  setTimeout(function () {
    targetPopUp.classList.add("show");
  }, 100);
  body.style.overflowY = "hidden";
  ShowMealPopup(that.dataset.index);
}
function closePopup() {
  generalPopUp.forEach(function (popup) {
    popup.classList.remove("show");
    setTimeout(function () {
      popup.classList.remove("active");
      body.style.overflowY = "auto";
    }, 100);
  });
}
function ShowMealPopup(index) {
  currentMealIndex = index;
  selectedMeal.innerHTML = `
   <h2 class="text-light my-3">${currentArrayDisplayed[index].name}</h2>
            <div class="data">
              <div class="image rounded-5 overflow-hidden">
                <img src="images/${currentArrayDisplayed[index].images[0]}" alt="" />
              </div>
              <div class="price">${currentArrayDisplayed[index].price}</div>
            </div>
            <p class="text-start my-4">
              ${currentArrayDisplayed[index].description}
            </p>
          </div>
  `;
}
function nextMeal() {
  currentMealIndex = (currentMealIndex + 1) % currentArrayDisplayed.length;
  ShowMealPopup(currentMealIndex);
}
function prevMeal() {
  currentMealIndex = (currentMealIndex - 1 + currentArrayDisplayed.length) % currentArrayDisplayed.length;
  ShowMealPopup(currentMealIndex);
}