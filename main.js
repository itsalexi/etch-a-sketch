// let gridSize = 16
const canvas = document.querySelector("#canvas");

function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    console.log("test");
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.textContent = "hi";

    canvas.append(pixel);
  }

  canvas.style.cssText = `grid-template-columns: repeat(${size}, 25px [col-start])`;
}
