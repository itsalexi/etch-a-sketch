let gridSize = 16;
const mainDiv = document.querySelector(".main");

function generateGrid(size) {
  const canvas = document.createElement("div");
  canvas.setAttribute("id", "canvas");
  mainDiv.append(canvas);
  for (let i = 0; i < size * size; i++) {
    console.log("test");
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.textContent = "hi";

    canvas.append(pixel);
  }

  canvas.style.cssText = `grid-template-columns: repeat(${size}, 25px [col-start])`;
}

function removeCanvas() {
  const canvas = document.querySelector("#canvas");
  canvas.remove();
}

function makeCanvas() {
  let size = prompt("How big do you want your canvas to be?");
  if (!size) return;

  removeCanvas();
  generateGrid(size);
}
generateGrid(16);
