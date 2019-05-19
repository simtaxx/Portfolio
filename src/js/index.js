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
let string = `
Je suis actuellement étudiant à HETIC en
Bachelor Web. Mon objectif et de réussir mes études
et de pouvoir évoluer tout en continuant à aimer ce que je fais!
Je suis à la recherche d'un stage de 3 mois en tant 
que développeur front du 1er juillet au 20 septembre.`;
let str = string.split("");
let el = document.getElementById("str");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  let running = setTimeout(animate, 25);
})();
