const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(280, 300, 20, 100);
ctx.fillRect(340, 300, 100, 300);
ctx.fillRect(480, 300, 20, 100);

ctx.arc(390, 250, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(370, 240, 8, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(410, 240, 8, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(390, 260, 15, 0, Math.PI);
ctx.fill();
