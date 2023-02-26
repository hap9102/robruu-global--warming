//homepage
const slideshow = document.querySelector(".slideshow");
const images = slideshow.querySelectorAll("#img");

//causes

let index = 0;

setInterval(() => {
  images[index].classList.remove(`active`);
  index = (index + 1) % images.length;
  images[index].classList.add(`active`);
}, 3000);
