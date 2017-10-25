var logoBlock = document.querySelector(".header__logo-block");
var toggleClose = document.querySelector(".header__toggle--close");
var toggleOpen = document.querySelector(".header__toggle--open");
var siteNav = document.querySelector(".site-nav");

logoBlock.classList.remove("header__logo-block--open");
toggleOpen.classList.add("header__toggle--show");
siteNav.classList.add("site-nav--close");

toggleOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  logoBlock.classList.add("header__logo-block--open");
  siteNav.classList.remove("site-nav--close");
  toggleOpen.classList.remove("header__toggle--show");
  toggleClose.classList.add("header__toggle--show");
});

toggleClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  logoBlock.classList.remove("header__logo-block--open");
  siteNav.classList.add("site-nav--close");
  toggleClose.classList.remove("header__toggle--show");
  toggleOpen.classList.add("header__toggle--show");
});
