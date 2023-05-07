const nav = document.querySelector(".nav");
const nav__menu = nav.querySelector(".nav__menu");

const hammenu = document.querySelector(".hammenu");
const hammenu__close = hammenu.querySelector(".hammenu__close");

const blur = document.querySelector(".blur");

nav__menu.addEventListener("click", function () {
  hammenu.style.display = "block";
  blur.style.display = "block";
});

hammenu__close.addEventListener("click", function () {
  hammenu.style.display = "none";
  blur.style.display = "none";
});
