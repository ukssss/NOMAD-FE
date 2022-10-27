const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementById("color-change");
const fill = document.getElementById("fill-btn");
const stroke = document.getElementById("stroke-btn");
const erase = document.getElementById("erase-btn");
const refresh = document.getElementById("refresh-btn");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = 5;

let setPaint = false;
let setMode = false;

function onMouseMove(event) {
  if (setPaint) {
    ctx.lineTo(event.offsetX, event.offsetY);
    if (setMode) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
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

function onChangeColor(event) {
  const color = event.target.value;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function onStrokeMode() {
  setMode = false;
}

function onFillMode() {
  setMode = true;
}

function onEraseMode() {
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
}

function onRefreshMode() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

canvas.addEventListener("mousemove", onMouseMove); // 마우스가 움직일 경우
canvas.addEventListener("mousedown", onStartPaint); // 마우스가 클릭되었을 경우
canvas.addEventListener("mouseup", onStopPaint); // 마우스 클릭이 해제되었을 경우
canvas.addEventListener("mouseleave", onStopPaint); // 마우스가 캔버스를 벗어났을 경우

color.addEventListener("change", onChangeColor); // input 값에 따라 색 변화
stroke.addEventListener("click", onStrokeMode); // 버튼 클릭시 stroke 모드
fill.addEventListener("click", onFillMode); // 버튼 클릭시 fill 모드
erase.addEventListener("click", onEraseMode); // 버튼 클릭시 erase 모드
refresh.addEventListener("click", onRefreshMode); // 버튼 클릭시 초기화
