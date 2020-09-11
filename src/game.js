import Round from "./round";

const SAMPLE_PROBLEM = ['owl', 'apple', 'banana']; 

export default class Game {
    constructor() { 
       this.run = this.run.bind(this);
        document
          .getElementById("question-form")
          .addEventListener("submit", (e) => {
            e.preventDefault(); 
            const answer = document.getElementById("question").value;
            if (answer.trim()) {
              document.getElementById("question").style.display = "none";
              document.getElementById("submit-btn").style.display = "none";
              document.getElementById("guesser-question-text").style.display =
                "none";
              document.getElementById("acter-question-text").style.display =
                "none";
              new Round(answer);
            } else {
              document.getElementById("question").placeholder = "Question can't be blank!";
            }
        });
       this.run();
    } 

    run() {    
       
    }
}