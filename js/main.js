// Бургер меню

let burger = document.querySelector(".header__menu-button");
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll(".nav__link");
let heroWrapper = document.querySelector(".hero__wrapper");

document.body.addEventListener("click", function (e) {
  if (e.target.closest(".header__menu-button")) {
    burger.classList.toggle("header__menu-button--active");
    menu.classList.toggle("header__nav--active");
    document.body.classList.toggle("stop-scroll");
    heroWrapper.classList.toggle("hero__wrapper--hidden");
  }

  if (e.target.closest(".nav__link")) {
    burger.classList.remove("header__menu-button--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
    heroWrapper.classList.remove("hero__wrapper--hidden");
  }

  if ( !( e.target.closest(".header__nav") || e.target.closest(".header__menu-button") ) ) {
    burger.classList.remove("header__menu-button--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");

    heroWrapper.classList.remove("hero__wrapper--hidden");
  }

  if ( !menu.closest(".header__nav--active") ) {
    heroWrapper.classList.remove("hero__wrapper--hidden");
  }
});


// Слайдер

const swiper = new Swiper(".swiper", {
  // Optional parameters

  speed: 500,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Табы

document.querySelectorAll(".steps__link").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".steps__link").forEach(function (btn) {
      btn.classList.remove("steps__link--active");
    });

    e.currentTarget.classList.add("steps__link--active");
    document.querySelectorAll(".working__wrapper").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("working__wrapper--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("working__wrapper--active");
  });
});

// Аккордеон

$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});

// Поиск

document.querySelector(".header__search").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form--active");
  this.classList.add("search--active");
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");

  if(!target.closest(".header__form-container")) {
    form.classList.remove("form--active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search").classList.remove("search--active");
  }
});
