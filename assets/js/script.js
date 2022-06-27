// Credit to Love Maths essentials walkthrough for page load event listener code
// Ensure quiz begins running after page finishes loading
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementById("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else {
            runQuiz();
        }
 
})}})


runQuiz(); {
    let quizArea = [
        {
            question: "The great Empire of Shurima was destroyed after which Champion betrayed the Emperor?",
            answers: {
                1: "Sivir",
                2: "Nasus",
                3: "Xerath",
                4: "Renekton",
            }, 
            trueAnswer: "3"
        },
        {
            question: "Who is the Sheriff of Piltover?",
        }
    ]

}

startQuiz()

checkAnswer()

correctAnswer()

addToScore()

totalScore()



