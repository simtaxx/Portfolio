let contactButton = document.querySelector(".contact");
let body = document.querySelector(".projects");
let body2 = document.querySelector("main");
contactButton.addEventListener("click", () => {
  contactButton.classList.toggle("open");
});
body.addEventListener("click", () => {
  contactButton.classList.remove("open");
});
body2.addEventListener("click", () => {
  contactButton.classList.remove("open");
});
