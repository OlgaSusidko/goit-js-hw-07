function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", handleCreate);
buttonDestroy.addEventListener("click", destroyBoxes);

function handleCreate() {
  const number = Number(inputNumber.value);

  if (number > 0 && number <= 100) {
    createBoxes(number);
    inputNumber.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

function createBoxes(number) {
  boxes.innerHTML = "";

  let boxSize = 30;
  const boxElements = [];

  for (let i = 0; i < number; i++) {
    const box = document.createElement("div");

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxElements.push(box);

    boxSize += 10;
  }
  
  boxes.append(...boxElements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}