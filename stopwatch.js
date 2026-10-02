var interval;

function startTimer() {
  var seconds = Number(document.getElementById("seconds").innerHTML);
  var minutes = Number(document.getElementById("minutes").innerHTML);

  interval = setInterval(() => {
    seconds += 1;

    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
  }, 300);
}

function stopTimer() {
  clearInterval(interval);
}


var interval;
function startTimer() {
  var seconds = Number(document.getElementById("seconds").innerHTML);
  var minutes = Number(document.getElementById("minutes").innerHTML);


    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
      hours += 1;
    }
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    startTimer()
  }


function stopTimer() {
  clearInterval(interval);
}
