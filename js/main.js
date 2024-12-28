// Dark Mode
let toggleBTN = document.querySelector("#toggle-btn");
let label = document.querySelector(".btn-lbl");
let body = document.querySelector("body");

let darkMode;


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


// Heading Animation
let mainTitle = document.querySelectorAll(".main-title");
let spanBefore = document.querySelectorAll(".before");
let spanAfter = document.querySelectorAll(".after");
let section = document.querySelectorAll(".section");

window.onscroll = function () {
  if (window.scrollY >= section[0].offsetTop - 200) {
    spanBefore[0].style = `
    animation: LTR 0.4s linear forwards;
    -webkit-animation: LTR 0.4s linear forwards;
    `;
    spanAfter[0].style = `
    animation: RTL 0.4s linear forwards;
    -webkit-animation: RTL 0.4s linear forwards;
    `;
    mainTitle[0].style = `
    color: var(--sec1-background-color);
    border-color: transparent;
    transition-delay: 0.25s;
    `;
  } else {
    spanBefore[0].style = `
    animation: Reverse-LTR 0.4s linear forwards;
    -webkit-animation: Reverse-LTR 0.4s linear forwards;
    `;
    spanAfter[0].style = `
    animation: Reverse-RTL 0.4s linear forwards;
    -webkit-animation: Reverse-RTL 0.4s linear forwards;
    `;
    mainTitle[0].style = `
    color: var(--heading-color);

    `;
  }
  if (window.scrollY >= section[1].offsetTop - 280) {
    spanBefore[1].style = `
    animation: LTR 0.4s linear forwards;
    -webkit-animation: LTR 0.4s linear forwards;
    `;
    spanAfter[1].style = `
    animation: RTL 0.4s linear forwards;
    -webkit-animation: RTL 0.4s linear forwards;
    `;
    mainTitle[1].style = `
    color: var(--sec1-background-color);
    border-color: transparent;
    transition-delay: 0.25s;
    `;

    spanBefore[0].style = `
    animation: Reverse-LTR 0.4s linear forwards;
    -webkit-animation: Reverse-LTR 0.4s linear forwards;
    `;
    spanAfter[0].style = `
    animation: Reverse-RTL 0.4s linear forwards;
    -webkit-animation: Reverse-RTL 0.4s linear forwards;
    `;
    mainTitle[0].style = `
    color: var(--heading-color);
    `;
  } 
  else {
    spanBefore[1].style = `
    animation: Reverse-LTR 0.4s linear forwards;
    -webkit-animation: Reverse-LTR 0.4s linear forwards;
    `;
    spanAfter[1].style = `
    animation: Reverse-RTL 0.4s linear forwards;
    -webkit-animation: Reverse-RTL 0.4s linear forwards;
    `;
    mainTitle[1].style = `
    color: var(--heading-color);
    border-color: var(--heading-color);

    `;
  }
};
