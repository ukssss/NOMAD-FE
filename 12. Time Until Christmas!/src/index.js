const timer = document.querySelector("h2");

function getClock() {
  const date = new Date();
  const dday = new Date(`2022-12-25T00:00:00+0900`);

  const diffCal = dday.getTime() - date.getTime();

  const diffSec = String(Math.floor((diffCal / 1000) % 60)).padStart(2, "0");
  const diffMin = String(Math.floor((diffCal / (1000 * 60)) % 60)).padStart(2, "0");
  const diffHour = String(Math.floor((diffCal / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const diffDay = Math.floor(diffCal / (1000 * 60 * 60 * 24));

  const isSameDay = (date, dday) => {
    return date.getFullYear() === dday.getFullYear() && date.getMonth() === dday.getMonth() && date.getDate() === dday.getDate();
  };

  if (isSameDay(date, dday)) {
    timer.innerText = "Merry Christmas!";
  } else {
    timer.innerText = `${diffDay}d : ${diffHour}h : ${diffMin}m : ${diffSec}s `; // 시:분:초
  }
}

getClock(); // 최초 시간
setInterval(getClock, 1000); // 1초 간격으로 시:분:초 출력
