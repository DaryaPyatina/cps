const btn = document.getElementById("toggle-btn");
const brands = document.querySelector(".container");
const arrow = document.querySelector(".arrow");

btn.addEventListener("click", () => {
  brands.classList.toggle("container-show");
  arrow.classList.toggle("arrow-up");
  if (btn.textContent === "Показать все") {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать все";
  }
});
