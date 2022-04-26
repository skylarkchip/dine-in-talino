const siteBody = document.querySelector("body");
const menuToggle = document.querySelector(".filterToggle");
const menuDrawer = document.querySelector(".menuDrawer");
const scrollBtn = document.querySelector(".scrollToBtn");
const mainDiv = document.querySelector("#main");

function addClasses(first, second) {
  first.classList.add("is-active");
  second.classList.add("is-active");
}
function removeClasses(first, second) {
  first.classList.remove("is-active");
  second.classList.remove("is-active");
}

const toggleNav = (e) => {
  addClasses(menuToggle, menuDrawer);
};

const closeNav = (e) => {
  removeClasses(menuToggle, menuDrawer);
};

const scrollDown = () => {
  mainDiv.scrollIntoView();
};

menuToggle.addEventListener("click", toggleNav);

scrollBtn.addEventListener("click", scrollDown);

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target)) closeNav();
});
