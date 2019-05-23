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
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
let mainSlide = document.querySelector(".main-slide");
let firstSlide = document.querySelector(".slide:nth-child(2)");
let secondSlide = document.querySelector(".slide:nth-child(3)");
let thirdSlide = document.querySelector(".slide:nth-child(4)");
let firstBg = document.querySelector("firstBg");
let secondBg = document.querySelector("secondBg");
let thirdBg = document.querySelector("thirdBg");

/*function showMore(slide, bg) {
  slide.addEventListener("click", () => {
    mainSlide.classList.remove("slide", "firstBg", "secondBg", "thirdBg");
    mainSlide.className = `${bg}`;
    console.log(mainSlide);
  });
}
showMore(firstSlide, firstBg);
showMore(secondSlide, secondBg);
showMore(thirdSlide, thirdBg);*/

firstSlide.addEventListener("click", () => {
  mainSlide.classList.remove("slide", "firstBg", "secondBg", "thirdBg");
  mainSlide.className = "firstBg";
});
secondSlide.addEventListener("click", () => {
  mainSlide.classList.remove("slide", "firstBg", "secondBg", "thirdBg");
  mainSlide.className = "secondBg";
});
thirdSlide.addEventListener("click", () => {
  mainSlide.classList.remove("slide", "firstBg", "secondBg", "thirdBg");
  mainSlide.className = "thirdBg";
});
