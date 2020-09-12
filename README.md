# Charades 
[Live Demo](https://yinghuanchen.github.io/Charades/) 

## 1. Overview 
Charades has always been a party game hit. It is a word guessing game, with one player acting without any spoken language and the other players guessing. In my app, instead of acting, the acter draw for guesser to guess the answer.  

![overview](https://user-images.githubusercontent.com/65005487/93005915-b76db880-f588-11ea-999e-1d8ff34f76d1.gif)

## 2. How to Play the Game 

* Acter can type in the answer or use auto generated question 

![submit](https://user-images.githubusercontent.com/65005487/93006418-8a240900-f58e-11ea-958e-9ffe3f1370e1.gif)

* When the round start, Acter can start drawing and Guesser has only 60 seconds to guess for correct answer. Acter can change color and clear all while drawing.

![draw](https://user-images.githubusercontent.com/65005487/93006436-bb043e00-f58e-11ea-8736-1ff118172911.gif)

* The score board will record the total rounds which Guesser answer correctly and the total rounds which Guesser has played.  

![score](https://user-images.githubusercontent.com/65005487/93006464-2fd77800-f58f-11ea-9245-87ecd19257a1.gif) 

## 3. Architecture and Technology 

The project is implemented with:
  * JavaScript for the overall gaming logic
  * HTML5 Canvas for drawing 
  * Webpack as the JS module bundler 
  
The following scripts are used to support the game implementation: 
  * drawing.js: The canvas for user to draw and change color 
  * round.js: The game logic for a round, including checking the answer that Guesser typed in and a countdown timer. 
  * game.js:  The game logic for several rounds and record the score.  
  
## 4. Code snippets 

Each round the 


```javascript
function waitForCondition(answer, handleEnd, handleWin) {
      return new Promise((resolve) => {
          let timeleft = 60;
          function checkAnswer() {
            document.getElementById("progressBar").value = timeleft;
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
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
              document.getElementById("round-result").innerText = `The answer is ${answer}`;
              window.setTimeout(() => handleEnd(), 5000);
              resolve();
            } else {
              window.setTimeout(checkAnswer, 1000);
            }
          }
          checkAnswer();
      });
 }
const run = async () => {
  await waitForCondition(answer, this.handleEnd, this.handleWin);
};
run();

```
