import { copyFile } from "fs";

let contactButton = document.querySelector(".contact");
let body = document.querySelector(".projects");
let body2 = document.querySelector("main");
console.log(body);
contactButton.addEventListener("click", () => {
  contactButton.classList.add("open");
});
body.addEventListener("click", () => {
  console.log("lourd");
  contactButton.classList.remove("open");
});
body2.addEventListener("click", () => {
  console.log("lourd");
  contactButton.classList.remove("open");
});
