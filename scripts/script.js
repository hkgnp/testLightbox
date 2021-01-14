"use strict";

const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".overlay");
const btnCloseLightbox = document.querySelector(".close-lightbox");
const btnsOpenLightbox = document.querySelectorAll(".open-lightbox");
const closeLightbox = function () {
  lightbox.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openLightbox = function () {
  console.log(`Button clicked`);
  lightbox.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenLightbox.length; i++) {
  btnsOpenLightbox[i].addEventListener("click", openLightbox);
}

btnCloseLightbox.addEventListener("click", closeLightbox);
overlay.addEventListener("click", closeLightbox);

//listen for events everywhere
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !lightbox.classList.contains("hidden")) {
    closeLightbox();
  }
});
