const timer = document.querySelector("h2");

function getClock() {
  const date = new Date();
  const dday = new Date(2022, 12, 25);

  const ddayCal = dday.getTime() - date.getTime();
  const days = ddayCal / (1000 * 60 * 60 * 24);
  const hours = ddayCal / (1000 * 60 * 60);
  const minutes = ddayCal / (1000 * 60);
  const seconds = ddayCal / 1000;

  timer.innerText = `${days}d:${hours}h:${minutes}m:${seconds}s`; // 시:분:초
}

getClock(); // 최초 시간
setInterval(getClock, 1000); // 1초 간격으로 시:분:초 출력

// var now = new Date();

// var year = now.getFullYear(); // 연도
// var month = now.getMonth() + 1; // 월
// var day = now.getDate(); // 일

// var stDate = new Date(2021, 03, 21);
// var endDate = new Date(year, month, day);

// var btMs = endDate.getTime() - stDate.getTime();
// var btDay = btMs / (1000 * 60 * 60 * 24);

// console.log("일수 차이는?? " + btDay);
