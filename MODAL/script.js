"use strict";

const modalBtn = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal");

const closeModalBtn = document.querySelector(".close-modal");

const overlay = document.querySelector(".overlay");

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener("click", openModal);
  console.log("button clicked");
}

//close modal
closeModalBtn.addEventListener("click", closeModal);

//close by clicking on overlay
overlay.addEventListener("click", closeModal);

//close by escape key

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
