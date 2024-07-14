function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickMe = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

clickMe.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}