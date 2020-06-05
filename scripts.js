const container = document.querySelector("#container");

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

createGrid(16);

const clearBtn = document.querySelector("#clear-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const blackPenBtn = document.querySelector("#black-pen");
const resizeBtn = document.querySelector("#resize-btn");

resizeBtn.addEventListener("click", (e) => {
  clear();
  let columns = prompt("How many columns do you want?");
  createGrid(columns);
  blackPen();
});

clearBtn.addEventListener("click", clear);

function clear() {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.classList.remove("grid-box-black");
    element.classList.add("grid-box");
  });
}

eraserBtn.addEventListener("click", eraserPen);

function eraserPen() {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        element.classList.remove("grid-box-black");
        element.classList.add("grid-box");
      }
    });

    element.addEventListener("click", (e) => {
      element.classList.remove("grid-box-black");
      element.classList.add("grid-box");
    });
  });
}

blackPenBtn.addEventListener("click", blackPen);

function blackPen() {
  const boxes = document.querySelectorAll(".grid-box, .grid-box-black");
  Array.from(boxes).forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        element.classList.add("grid-box-black");
        element.classList.remove("grid-box");
      }
    });

    element.addEventListener("click", (e) => {
      element.classList.add("grid-box-black");
      element.classList.remove("grid-box");
    });
  });
}

blackPen();
