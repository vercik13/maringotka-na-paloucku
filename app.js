const nav = document.querySelector(".menu__nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const bg = document.getElementById("head__photo");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var headPhoto = document.getElementById("head__photo");

  if (scrollPosition > 100) {
    // Změňte hodnotu, kdy chcete, aby se začal měnit
    headPhoto.classList.add("is-scrolled");
  } else {
    headPhoto.classList.remove("is-scrolled");
  }
});
