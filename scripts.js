// References
const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const resizeBtn = document.querySelector("#resize-btn");
const blackPenBtn = document.querySelector("#black-pen");
const colourPenBtn = document.querySelector("#colour-pen");

//Functions
function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  container.style.gridTemplateRows = `repeat(${size}, auto)`;
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-box");
    container.appendChild(box);
  }
}

function clear() {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.style.removeProperty("background-color");
    element.classList.remove("grid-box-black");
    element.classList.add("grid-box");
  });
}

function blackPen() {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        element.classList.add("grid-box-black");
        element.classList.remove("grid-box");
        element.style.removeProperty("background-color");
      }
    });

    element.addEventListener("click", (e) => {
      element.classList.add("grid-box-black");
      element.classList.remove("grid-box");
      element.style.removeProperty("background-color");
    });
  });
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}

// Event Listeners & Initialization
createGrid(16);
blackPen();

clearBtn.addEventListener("click", clear);
blackPenBtn.addEventListener("click", blackPen);

resizeBtn.addEventListener("click", (e) => {
  clear();
  let columns = prompt("How many columns do you want?");
  createGrid(columns);
  blackPen();
});

eraserBtn.addEventListener("click", (e) => {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        element.style.removeProperty("background-color");
        element.classList.remove("grid-box-black");
        element.classList.add("grid-box");
      }
    });

    element.addEventListener("click", (e) => {
      element.style.removeProperty("background-color");
      element.classList.remove("grid-box-black");
      element.classList.add("grid-box");
    });
  });
});

colourPenBtn.addEventListener("click", (e) => {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      }
    });

    element.addEventListener("click", (e) => {
      element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    });
  });
});
