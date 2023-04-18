const content = document.getElementsByTagName("body")[0];
const lightModeIcon = document.querySelector(".light-mode-icon");
const darkModeIcon = document.querySelector(".dark-mode-icon");
const subtractButton = document.getElementById("subtract-button");
const addButton = document.getElementById("addition-button");

darkModeIcon.addEventListener("click", () => {
  content.classList.add("dark-mode");
});

lightModeIcon.addEventListener("click", () => {
  content.classList.remove("dark-mode");
});

let counter = 0;

document.getElementById("counter-txt").innerHTML = counter;

subtractButton.addEventListener("click", () => {
  counter -= 1;
  document.getElementById("counter-txt").innerHTML = counter;
});
addButton.addEventListener("click", () => {
  counter += 1;
  document.getElementById("counter-txt").innerHTML = counter;
});
