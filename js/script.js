const siteBody = document.querySelector("body");
const menuToggle = document.querySelector(".filterToggle");
const menuDrawer = document.querySelector(".menuDrawer");

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

menuToggle.addEventListener("click", toggleNav);

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target)) closeNav();
});
