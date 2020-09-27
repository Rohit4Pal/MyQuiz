let questions = document.querySelectorAll(".question");
let arr = questions[0].getElementsByTagName("li");
let gotClicked = false;
let totalQuestionLeft = questions.length;
let deadline = 10;
let currentQuestion = 0;
let correctAns = 0;
let scoreText = document.getElementsByTagName("h3")[0];
questions[currentQuestion].style.display = "block";
let timerText = document.getElementById("timer").innerText;
document.getElementById("btn").addEventListener("click", nextQuestion);


for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", fn);
}

let startTimer = setInterval(function () {
  deadline--;
  let timer = timerText;
  document.getElementById("timer").innerHTML = timer + deadline + "s ";
  if (deadline === 0 || gotClicked) {
    clearInterval(startTimer);
    nextQuestion();
  }
}, 1000);


function nextQuestion() {
  deadline = 10;
  totalQuestionLeft--;
  let timer = timerText;
  document.getElementById("timer").innerHTML = timer + deadline + "s ";

  let startTimer = setInterval(function () {
    deadline--;
    let timer = timerText;
    document.getElementById("timer").innerHTML = timer + deadline + "s ";
    if (deadline === 0 || gotClicked) {
      clearInterval(startTimer);
      nextQuestion();
    }
  }, 1000);

  if (currentQuestion === questions.length - 1) return;
  questions[currentQuestion].style.display = "none";
  currentQuestion++;
  questions[currentQuestion].style.display = "block";

  arr = questions[currentQuestion].getElementsByTagName("li");
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", fn);
  }
  gotClicked = false;
}

function fn() {
  if (gotClicked) return;
  if (this.className === "correct") {
    this.style.backgroundColor = "green";
    correctAns++;
  } else {
    this.style.backgroundColor = "red";
  }
  let x = scoreText.innerText.slice(0, 12);
  //console.log(x);
  scoreText.innerText = x + " " + correctAns;
  gotClicked = true;
  //stopTimer();
  //nextQuestion();
}
