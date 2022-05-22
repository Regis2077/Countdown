let countDownDate = new Date(`may 31, 2022 23:59:00`).getTime();

let count = setInterval( () => {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".countdown__numbers").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  if (distance < 0) {
    clearInterval(count);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

