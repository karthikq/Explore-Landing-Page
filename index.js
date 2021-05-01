/** @format */

const menuToggle = document.querySelector(".toggle");
const showMenu = document.querySelector(".main-page");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  showMenu.classList.toggle("active");
});
