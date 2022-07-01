// Credit to Love Maths essentials walkthrough for page load event listener code
// Ensure quiz begins running after page finishes loading
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByClassName("nav-btn");
  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else {
            alert("Check answer by submitting!");
        }
 
})}})

// To get elements from the html
let quizArea = document.getElementById("quiz-area");
let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");
let scoreArea = document.getElementById("score-area");
let currentQuestion = 0;
let score = 0;

// Using arrays for the questions allows us to iterate over the questions
    let quizData = [
        {
            question: "1. The great Empire of Shurima was destroyed after which Champion betrayed the Emperor?",
            answers: {
                a: "Sivir",
                b: "Nasus",
                c: "Xerath",
                d: "Renekton",
            }, 
            trueAnswer: "c"
        },
        {
            question: "2. Who is the Sheriff of Piltover?",
            answers: {
                a: "Camille",
                b: "Caitlin",
                c: "Heimerdinger",
                d: "Seraphine",
            },
            trueAnswer: "b"
        },
        {
            question: "3. Who killed Vayne's parents?",
            answers: {
                a: "Morgana",
                b: "Jhin",
                c: "Sylas",
                d: "Evelynn",
            },
            trueAnswer: "d"
        },
        {
            question: "4. Who wields the sentient darkin weapon, Raast?",
            answers: {
                a: "Kayn",
                b: "Varus",
                c: "Darius",
                d: "Jhin",
            },
            trueAnswer: "a"
        },
        {
            question: "5. Who was the infamous murderer once known as the 'Golden Demon'?",
            answers: {
                a: "Jhin",
                b: "Zed",
                c: "Bel'veth",
                d: "Aatrox",
            },
            trueAnswer: "a"
        },
        {
            question: "6. Katarina received her scar courtesy of...?",
            answers: {
                a: "Talon",
                b: "Cassiopeia",
                c: "Darius",
                d: "Riven",
            },
            trueAnswer: "a"
        },
        {
            question: "7. Who inspired the 'Glorious Evolution' in Piltover and Zaun?",
            answers: {
                a: "Jayce",
                b: "Viktor",
                c: "Vi",
                d: "Urgot",
            },
            trueAnswer: "b"
        },
        {
            question: "8. Which yordle has a forever-friendship with the faerie, Pix?",
            answers: {
                a: "Heimerdinger",
                b: "Tristana",
                c: "Lulu",
                d: "Vex",
            },
            trueAnswer: "c",
        },
        {
            question: "9. Which fearsome figure did Miss Fortune witness murder her family as a child?",
            answers: {
                a: "Nautilus",
                b: "Gangplank",
                c: "Twisted Fate",
                d: "Pyke",
            },
            trueAnswer: "b"
        },
        {
            question: "10. Who is the brother of the mighty Volibear?",
            answers: {
                a: "Braum",
                b: "Galio",
                c: "Anivia",
                d: "Ornn",
            },
            trueAnswer: "d"
        },
        {
            question: "11. Who are the masters of the creatures of the Void?",
            answers: {
                a: "The Watchers",
                b: "The Aspects",
                c: "The Black Rose",
                d: "The Darkin",    
            },
            trueAnswer: "a"
        },
        {
            question: "12. What was the name of the cataclysm that merged the spirit and material realms together in the Blessed Isles?",
            answers: {
                a: "Rune Wars",
                b: "Ruination",
                c: "Void War",
                d: "Fall of Shurima",
            },
            trueAnswer: "b"
        },
        {
            question: "13. What is the term 'darkin' roughly translated to in the old tongue?",
            answers: {
                a: "The fallen",
                b: "The righteous",
                c: "The malevolent",
                d: "The lost",
            },
            trueAnswer: "a"
        },
        {
            question: "14. Jericho Swain embodies which of the three Principles of Strength as a member of the Trifarix?",
            answers: {
                a: "Might",
                b: "Guile",
                c: "Vision",
                d: "Mercy",
            },
            trueAnswer: "c"
        },
        {
            question: "15. To erase the memory of siphoning the essence of her lover, who did Ahri seek out?",
            answers: {
                a: "The Kinkou",
                b: "The Order of the Shadow",
                c: "The Witch Gardener",
                d: "The Golden Demon",
            },
            trueAnswer: "c"
        },
        {
            question: "16. How does the demon Evelynn draw her power?",
            answers: {
                a: "Deception",
                b: "Inflicting pain",
                c: "Bargains",
                d: "Love",
            },
            trueAnswer: "b"
        },
        {
            question: "17. What is the name of the white stone the city of Demacia is built on?",
            answers: {
                a: "Quartzite",
                b: "Marble",
                c: "Granite",
                d: "Petricite",
            },
            trueAnswer: "d"
        },
        {
            question: "18. What deity does Illaoi serve?",
            answers: {
                a: "Nagakabouros",
                b: "Aurelian Sol",
                c: "Kayle",
                d: "Soraka",
            },
            trueAnswer: "a"
        },
        {
            question: "19. What justification did the Solari give for denouncing Diana?",
            answers: {
                a: "Her heresy",
                b: "Her betrayal",
                c: "Her evil heart",
                d: "Her lack of interest",
            },
            trueAnswer: "a"
        },
        {
            question: "20. What IS Amumu?",
            answers: {
                a: "A warlord",
                b: "An ancient Emperor",
                c: "A popstar",
                d: "A sad mummy",
            },
            trueAnswer: "d"
        }
    ];

function displayData() {
    // Code credit to sitepoint for output of data
    // This variable will contain all the data displayed on the page
    let output = [];
   

    // This applies to each question in the array
    quizData.forEach(
        (currentQuestion, questionNumber) => {

            let answers = [];

        for (letter in currentQuestion.answers) {
            // Include label in the push so user can click on the label to select their answer
            answers.push(`<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answers[letter]}
            </label>`);
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
          );
    }
    );

    // To skip the assignment on landing page where the HTML is undefined
    if (quizArea.innerHTML !== "") {
    quizArea.innerHTML = output.join("");
    } else {
        console.log()
    }
}
// Calling the function defined
displayData();

function checkAnswer() {
// Code help from sitepoint
    quizData.forEach(
        (currentQuestion, questionNumber) => {
         let answerAreas = quizArea.querySelectorAll('.answers'); 
         let oneAnswer = answerAreas[questionNumber];
        //  Defining the checked selector
         let checked = `input[name=question${questionNumber}]:checked`;
        //  The '||' value is in case the user doesn't select any button and submits
         let selectedAnswer = (oneAnswer.querySelector(checked) || {}).value;
         if (selectedAnswer === currentQuestion.trueAnswer){
            score++;
            alert("Yes!");
         } else {
            console.log(score);
         }
})

}

function nextQuestion() {}

function addToScore() {}

function totalScore() {}





