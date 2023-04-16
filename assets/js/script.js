document.addEventListener("DOMContentLoaded", function () {
  const darkModeIcon = document.querySelector(".dark-mode-icon");
  const lightModeIcon = document.querySelector(".light-mode-icon");

  darkModeIcon.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  });

  lightModeIcon.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  });

  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
  }
});
