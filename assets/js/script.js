const content = document.getElementsByTagName("body")[0];
const lightModeIcon = document.querySelector(".light-mode-icon");
const darkModeIcon = document.querySelector(".dark-mode-icon");

darkModeIcon.addEventListener("click", () => {
  content.classList.add("dark-mode");
});

lightModeIcon.addEventListener("click", () => {
  content.classList.remove("dark-mode");
});
