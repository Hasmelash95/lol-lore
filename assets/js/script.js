/**
 * Event listener to ensure page loads before functions are called.
 * Credit to Love Maths Walthrough for code hint.
 */
 document.addEventListener("DOMContentLoaded", function () {
   const buttons = document.getElementsByClassName("nav-btn");
   for (let button of buttons) {
      button.addEventListener("click", function () {
         if (this.getAttribute("data-type") === "submit") {
            checkAnswers();
            nextQuestion();
         } else if (this.getAttribute("data-type") === "retry") {
            restartQuiz();
         } else {
            // Borrowed from sweetalert2
            Swal.fire("Unknown button");
            throw "Unknown button. Aborting...";
         }

      });
   }
});

// To get elements from the HTML
const quizArea = document.getElementById("quiz-area");
const submitButton = document.getElementById("submit");
const scoreArea = document.getElementById("score-area");
const progressBar = document.getElementById("progress-bar");
const currentProgress = document.getElementById("current-progress");
// Defining some variables that will appear throughout the script
let currentQuestion = 0;
let score = 0;
// Defining variable for progress bar
currentProgress.style.width = "5%";
let currentWidth = 5;

/**
 * The displayData function will output the quizData (found in quiz-data.js) and ensure one question is displayed 
 * on the page at a time.
 */
function displayData() {

   let quiz = quizData[currentQuestion];
   // This variable will contain all the data displayed on the page
   let output = [];
   // This variable will contain the multiple choices per question
   let answers = [];
   let questionNumber = currentQuestion + 1;

   // For in used to iterate over enumerable properties of the object rather than the array
   for (let letter in quiz.answers) {
      // If statement added to ensure script knows letter is a direct property of answers 
      if (quiz.answers.hasOwnProperty(letter)) {
         // Code credit to sitepoint for output of data
         // Include label in the push so user can click on the label to select their answer
         answers.push(`
        <label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${quiz.answers[letter]}
        </label>
        `);
      }
   }

   // Pushing the question and answers array (defined above) into the output arrays
   output.push(
      `
      <div class = "page">
        <div class="question"> ${quiz.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>
      `
   );

   // Pushing the output array into the HTML area specified
   quizArea.innerHTML = output.join("");

}

// Calling the function defined above
displayData();

/**
 * On clicking submit the answer will be checked against the correctAnswer defined in this function
 *  and if correct, the score increments by one.
 */
function checkAnswers() {
   let correctAnswer = quizData[currentQuestion].trueAnswer;
   let questionNumber = currentQuestion + 1;

   //  As the value for undefined (unchecked) cannot be read, an if statement was added
   let inputCheck = document.querySelector(`input[name="question${questionNumber}"]:checked`)
   if (inputCheck) {
      let checked = inputCheck.value;
      if (checked === correctAnswer) {
         score++;
         correctAlert();
      } else {
         incorrectAlert();
      }
   } else {
      incorrectAlert();
   }
}

/**
 * Clicking the submit button will take user to the next question in the array until the final question 
 * where it'll take the user to the display of their final score.
 */
function nextQuestion() {
   if (currentQuestion === quizData.length - 1) {
      submitButton.style.display = "none";
      totalScore();
      progressBar.style.display = "none";
   } else {
      displayData(quizData[currentQuestion++]);
      userProgress();
   }
}

/**
 * Used to monitor progress so user knows how far along they are.
 * It should increment by 5% with each new question.
 */
function userProgress() {
   currentWidth += 5;
   currentProgress.style.width = currentWidth + "%";
}

/**
 * Clicking submit after selecting the right answer will prompt a Correct! alert with an explanation.
 */
function correctAlert() {
   let quiz = quizData[currentQuestion];
   Swal.fire("Correct!", `${quiz.explanation}`);
}

/**
 * Clicking submit after selecting the wrong answer (or no answer) will prompt a Not Quite! alert with an explanation.
 */
function incorrectAlert() {
   let quiz = quizData[currentQuestion];
   Swal.fire("Not Quite!", `${quiz.explanation}`);
}

/**
 * When submit is clicked on final question, quiz area text is replaced with score area text".
 */
function totalScore() {
   // Link to league of legends website
   quizArea.innerHTML = (`
   <div id="lol-web">
    <a href="https://universe.leagueoflegends.com/en_gb/"
    aria-label="Link takes user to league of legends website in new tab" target="_blank">
    <span>Learn more about Runeterra!<span> 
    <i class="fa-solid fa-gem"></i></a>
    </div>
    `);
   // Calculating the percentage
   let totalScore = Math.floor(score / quizData.length * 100);
   // For scores less than 50%
   if (totalScore < 50) {
      scoreArea.innerHTML = (`
      Your final score is ${totalScore}%. Better luck next time! 
      Check out the link above to learn more.
      `);
      // For scores less than 70%
   } else if (totalScore < 70) {
      scoreArea.innerHTML = (`
      Your final score is ${totalScore}%. Not bad at all! To buff 
      your knowledge, check out the link above.
      `);
   } else {
      scoreArea.innerHTML = (`
      Your final score is ${totalScore}%. You really know your stuff! Well done LoL fan!
      `);
   }
}

/**
 * When the restart quiz button is clicked, the score reverts to 0 and the user is taken to the first question.
 */
function restartQuiz() {
   score = 0;
   currentQuestion = 0;
   displayData();
   submitButton.style.display = "inline-block";
   scoreArea.innerHTML = "";
   // Progress bar is restarted
   currentWidth = 0;
   userProgress();
   progressBar.style.display = "inline-block";
}
