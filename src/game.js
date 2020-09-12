import Round from "./round";
import SAMPLE_PROBLEM from './sample_problem';


export default class Game {
  constructor() {
    this.run = this.run.bind(this);
    this.totalRound = 0;
    document.getElementById("information").addEventListener('click', () => {
      const rand = Math.floor(Math.random() * (SAMPLE_PROBLEM.length - 0));
      document.getElementById("question").value = SAMPLE_PROBLEM[rand]; 
    });
    document.getElementById("question-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const answer = document.getElementById("question").value;
      if (answer.trim()) {
        document.getElementById("question").style.display = "none";
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("guesser-question-text").style.display = "none";
        document.getElementById("acter-question-text").style.display = "none";
         document.getElementById("information-div").style.display = "none";
        this.run(answer);
      } else {
        document.getElementById("question").placeholder =
          "Question can't be blank!";
      }
    });
  }

  run(answer) {
    const round = new Round(answer);
    this.totalRound += 1;
    document.getElementById("total-round").innerText = `${this.totalRound}`;
  }
}