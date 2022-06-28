let gridSize = 16;
let mode = "picker";
// Check if mouse is down
let mouseDown = false;
document.body.onmouseup = () => (mouseDown = false);
document.body.onmousedown = () => (mouseDown = true);

const mainDiv = document.querySelector(".main");
const colorPicker = document.querySelector("#color");

function generateGrid(size) {
  const canvas = document.createElement("div");
  canvas.setAttribute("id", "canvas");
  mainDiv.append(canvas);
  for (let i = 0; i < size * size; i++) {
    console.log("test");
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.append(pixel);
  }

  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function removeCanvas() {
  const canvas = document.querySelector("#canvas");
  canvas.remove();
}

function makeCanvas() {
  let size = prompt("How big do you want your canvas to be? (MAX: 100)");
  if (size > 100) return;
  if (isNaN(size)) return;
  removeCanvas();
  generateGrid(size);
  getPixels();
}

function getPixels() {
  pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", changePixel);
  });
}

function changePixel(e) {
  if (e.type == "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = getColor();
}

function getColor() {
  if (mode === "picker") {
    return `${colorPicker.value}`;
  } else if (mode === "random") {
    return randomRGB();
  }
}

function randomRGB() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

function changeMode(btn) {
  mode = `${btn.id}`;
  console.log(mode);
}

generateGrid(16);
getPixels();
