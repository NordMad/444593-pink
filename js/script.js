var logoBlock = document.querySelector(".header__logo-block");
var toggleClose = document.querySelector(".header__toggle--close");
var toggleOpen = document.querySelector(".header__toggle--open");
var siteNav = document.querySelector(".site-nav");
var formAchievement = document.querySelectorAll(".form__achievement-label");
var formApplication = document.querySelectorAll(".form__application-label");

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

for(var i=0; i< formAchievement.length; i++) {
  formAchievement[i].addEventListener("keydown", onCheckboxKeyDown);
}

for(var i=0; i< formApplication.length; i++) {
  formApplication[i].addEventListener("keydown", onRadiobuttonKeyDown);
}

function onCheckboxKeyDown(evt) {
  var code = evt.keyCode;
  if (code == 13 || code == 32) {
    var target = evt.currentTarget;
    var check = target.previousSibling;
    evt.preventDefault();
    check.checked = !check.checked
  }
}

function onRadiobuttonKeyDown(evt) {
  var code = evt.keyCode;
  if (code == 13 || code == 32) {
    var target = evt.currentTarget;
    var check = target.previousSibling;
    evt.preventDefault();
    check.checked = true
  }
}
