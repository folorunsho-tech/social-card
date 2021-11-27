const body = document.querySelector("body");
const input = document.querySelector("input");
const theme_text = document.querySelector(".theme-switch p");
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    input.checked = true;
    body.classList.add("dark");
    theme_text.textContent = "Theme: Dark Mode";
  } else if (theme === "light") {
    theme_text.textContent = "Theme: Light Mode";
  }
});
input.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (input.checked) {
    theme_text.textContent = "Theme: Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    theme_text.textContent = "Theme: Light Mode";
    localStorage.setItem("theme", "light");
  }
});
