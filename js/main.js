// Start Dark Mode
let toggleBTN = document.querySelector("#toggle-btn");
let label = document.querySelector(".btn-lbl");
let body = document.querySelector("body");

let darkMode = false;




toggleBTN.addEventListener("change", (event) => {
  darkMode = event.target.checked;
  if (darkMode) {
    body.classList.add("dark");
    label.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    body.classList.remove("dark");
    label.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});
// End Dark Mode


// Start Heading Animation
let mainTitle = document.querySelectorAll(".main-title");
let spanBefore = document.querySelectorAll(".before");
let spanAfter = document.querySelectorAll(".after");
let section = document.querySelectorAll(".section");

window.onscroll = function () {
  if (window.scrollY >= section[0].offsetTop - 200) {
    spanBefore[0].style = `
    transform: scale(1);
    `;
    spanAfter[0].style = `
    transform: scale(1);
    `;
    mainTitle[0].style = `
    color: var(--sec1-background-color);
    border-color: transparent;
    transition-delay: 0.25s;
    `;
  } else {
    spanBefore[0].style = `
    transform: scale(0.25);
    `;
    spanAfter[0].style = `
    transform: scale(0.25);
    `;
    mainTitle[0].style = `
    color: var(--heading-color);

    `;
  }
  if (window.scrollY >= section[1].offsetTop - 500) {
    spanBefore[1].style = `
    transform: scale(1);
    `;
    spanAfter[1].style = `
    transform: scale(1);
    `;
    mainTitle[1].style = `
    color: var(--sec1-background-color);
    border-color: transparent;
    transition-delay: 0.25s;
    `;

    spanBefore[0].style = `
    transform: scale(0.25);
    `;
    spanAfter[0].style = `
    transform: scale(0.25);
    `;
    mainTitle[0].style = `
    color: var(--heading-color);

    `;
  } else {
    spanBefore[1].style = `
    transform: scale(0.25);
    `;
    spanAfter[1].style = `
    transform: scale(0.25);
    `;
    mainTitle[1].style = `
    color: var(--heading-color);
    border-color: var(--heading-color);

    `;
  }
};

// End Heading Animation
