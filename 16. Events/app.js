const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("linewidth-range");
const color = document.getElementById("color-change");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const mode = document.getElementById("mode-btn");
const refresh = document.getElementById("refresh-btn");
const eraser = document.getElementById("eraser-btn");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let setPaint = false;
let setFill = false;
ctx.lineWidth = lineWidth.value;

function onMouseMove(event) {
  if (setPaint == true) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onStartPaint() {
  setPaint = true;
}

function onStopPaint() {
  setPaint = false;
}

function onChangeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}

function onColor(color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function onChangeColor(event) {
  onColor(event.target.value);
}

function onChangeColorOption(event) {
  color.value = event.target.dataset.color;
  onColor(event.target.dataset.color);
}

function onChangeMode() {
  if (setFill === false) {
    setFill = true;
    mode.innerText = "Fill";
  } else {
    setFill = false;
    mode.innerText = "Draw";
  }
}

function onCanvasFill() {
  if (setFill === true) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onRefresh() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraser() {
  ctx.strokeStyle = "white";
  setFill = false;
  mode.innerText = "Erase";
}

canvas.addEventListener("mousemove", onMouseMove); // 마우스가 움직일 경우
canvas.addEventListener("mousedown", onStartPaint); // 마우스가 클릭되었을 경우
canvas.addEventListener("mouseup", onStopPaint); // 마우스 클릭이 해제되었을 경우
canvas.addEventListener("mouseleave", onStopPaint); // 마우스가 캔버스를 벗어났을 경우

lineWidth.addEventListener("change", onChangeLineWidth); // input 값에 따라 굵기 변화
color.addEventListener("change", onChangeColor); // input 값에 따라 색 변화

colorOptions.forEach((color) => color.addEventListener("click", onChangeColorOption));

canvas.addEventListener("click", onCanvasFill);
mode.addEventListener("click", onChangeMode);
refresh.addEventListener("click", onRefresh);
eraser.addEventListener("click", onEraser);
