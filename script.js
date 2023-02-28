//homepage
const slideshow = document.querySelector(".slideshow");
const images = slideshow.querySelectorAll("#img");

const links = document.querySelectorAll(".link");
const bodyId = document.querySelector("body").id;

//causes

let index = 0;

setInterval(() => {
  images[index].classList.remove(`active`);
  index = (index + 1) % images.length;
  images[index].classList.add(`active`);
}, 3000);

const currentPath = window.location.pathname;
// loop through all menu items
const menuItems = document.querySelectorAll(".link");

menuItems.forEach((menuItem) => {
  // get the href attribute of the menu item

  const href = menuItem.getAttribute("href").slice(1);
  // compare the href attribute with the current page path
  if (href === currentPath) {
    menuItem.classList.add("activeLink");
  }
});
