const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const body = document.querySelector("body");

function resizeApply() {
  if (body <= 1000) {
    body.style.background = colors[0];
  } else if (body <= 500) {
    body.style.color = colors[1];
  } else {
    body.style.color = colors[2];
  }
}

window.addEventListener("resize", resizeApply());
