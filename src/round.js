import Drawing from './drawing';
export default class Round {
  constructor(answer) {
    this.answer = answer;
    this.won = false;
    this.start = this.start.bind(this);
    this.loading = this.loading.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.loading(answer);
  }

  loading(answer) {
    document.getElementById("start-round-btn").style.display = "block";
    document.getElementById("guesser-turn-back-text").style.display = "block";
    document.getElementById("round-result").innerText = "";
    document.getElementById("answer").value = "";
    const startRoundBtn = document.getElementById("start-round-btn");
    startRoundBtn.addEventListener(
      "click",
      () => {
        this.start(answer);
      },
      { once: true }
    );
  
    return;
  }

  start(answer) {
    // const canvas = document.getElementById("draw");
    // new Drawing(canvas);
    const canvas = document.getElementById("draw");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("start-round-btn").style.display = "none";
    document.getElementById("guesser-turn-back-text").style.display = "none";
    // Wait for the answer
    function waitForCondition(answer, handleEnd, handleWin) {
      return new Promise((resolve) => {
        let timeleft = 60;
        function checkAnswer() {
          document.getElementById("progressBar").value = timeleft;
          document.getElementById("countdown").innerHTML =
            timeleft + " seconds remaining";
          timeleft--;
          if (
            document.getElementById("answer").value.toLowerCase() ===
            answer.toLowerCase()
          ) {
            document.getElementById("round-result").innerText = "Well Done!";
            handleWin();
            window.setTimeout(()=> handleEnd(), 5000);
            resolve();
          } else if (timeleft < 0) {
            document.getElementById("countdown").innerHTML = "Time's Up!";
            document.getElementById(
              "round-result"
            ).innerText = `The answer is ${answer}`;
            window.setTimeout(() => handleEnd(), 5000);
            resolve();
          } else {
            window.setTimeout(checkAnswer, 1000);
          }
        }
        checkAnswer();
      });
    }
    document.getElementById("round-result").style.display = "block";
    document.getElementById("progressBar").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("guesser-guess-text").style.display = "block";
    document.getElementById("acter-draw-text").style.display = "block";

    // wait for the answer
    const run = async () => {
      await waitForCondition(answer, this.handleEnd, this.handleWin);
      return;
    };

    run();
    return;
  }

  handleEnd() {
    // debugger;
    document.getElementById("round-result").innerText = "";
    document.getElementById("round-result").style.display = "none";
    document.getElementById("start-round-btn").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("progressBar").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("guesser-guess-text").style.display = "none";
    document.getElementById("acter-draw-text").style.display = "none";
    document.getElementById("question").value = "";
    document.getElementById("question").style.display = "block";
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("guesser-question-text").style.display = "block";
    document.getElementById("acter-question-text").style.display = "block";
    document.getElementById("information-div").style.display = "inline-block";
    const canvas = document.getElementById("draw");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  handleWin() {
    // debugger;
    let winRound = parseInt(document.getElementById("win-round").innerText);
    winRound += 1;
    document.getElementById("win-round").innerText = winRound;
  }
}