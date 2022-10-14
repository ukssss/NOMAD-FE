import "./styles.css";

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");
document.body.style.background = colors[4];

function resize() {
  const size = window.innerWidth;
  if (size > 1500) {
    document.body.style.background = colors[0];
    title.innerText = "Over 1500px!";
  } else if (size > 1000 && size <= 1500) {
    document.body.style.background = colors[1];
    title.innerText = "Over 1000px!";
  } else if (size > 500 && size <= 1000) {
    document.body.style.background = colors[2];
    title.innerText = "Over 500px!";
  } else {
    document.body.style.background = colors[3];
    title.innerText = "Under 500px!";
  }
}

window.addEventListener("resize", resize);
