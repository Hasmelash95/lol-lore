// Credit to Love Maths essentials walkthrough for page load event listener code
// Ensure quiz begins running after page finishes loading
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("nav-btn");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswers();
                nextQuestion();
            } else if (this.getAttribute("data-type") === "retry") {
                restartQuiz();
            }
            else {
                alert("Unknown button");
                throw "Unknown button. Aborting..."
            }

        })
    }
})

// To get elements from the html
let quizArea = document.getElementById("quiz-area");
let submitButton = document.getElementById("submit");
let scoreArea = document.getElementById("score-area");
let lolLink = document.getElementById("lol-link");
let progressBar = document.getElementById("progress-bar");
let currentProgress = document.getElementById("current-progress");
// Defining some variables that will appear throughout the script
let currentQuestion = 0;
let score = 0;

/**
 * The questions and answers are in an array with objects and properties nested within. The expanation property will appear
 * in the alert box after each submit.
 */
let quizData = [{
        question: "1. The great Empire of Shurima was destroyed after which Champion betrayed the Emperor?",
        answers: {
            a: "Sivir",
            b: "Nasus",
            c: "Xerath",
            d: "Renekton"
        },
        trueAnswer: "c",
        explanation: "Enraged after many years spent as a slave, Xerath killed Emperor Azir during his Ascending Ritual and took his place. Destroying Shurima in the process."
    },
    {
        question: "2. Who is the Sheriff of Piltover?",
        answers: {
            a: "Camille",
            b: "Caitlin",
            c: "Heimerdinger",
            d: "Seraphine"
        },
        trueAnswer: "b",
        explanation: "Expert markswoman, Caitlin, is the highly intelligent Sheriff of Piltover. Her skills and cunning make her a woman not to be trifled with."
    },
    {
        question: "3. Who killed Vayne's parents?",
        answers: {
            a: "Morgana",
            b: "Jhin",
            c: "Sylas",
            d: "Evelynn"
        },
        trueAnswer: "d",
        explanation: "The demon Evelynn. At the age of sixteen, Vayne witnessed a woman of unspeakable beauty with horns standing over the corpses of her parents. She has vowed vengeance since."
    },
    {
        question: "4. Who wields the sentient darkin weapon, Raast?",
        answers: {
            a: "Kayn",
            b: "Varus",
            c: "Darius",
            d: "Jhin"
        },
        trueAnswer: "a",
        explanation: "Kayn is the bearer of the sentient, corrupting weapon. Will he let it control him? It remains to be seen."
    },
    {
        question: "5. Who was the infamous murderer once known as the 'Golden Demon'?",
        answers: {
            a: "Jhin",
            b: "Zed",
            c: "Bel'veth",
            d: "Aatrox"
        },
        trueAnswer: "a",
        explanation: "Despite his name, the Golden Demon turned out to be just a man. A stagehand named Khada Jhin."
    },
    {
        question: "6. Katarina received her scar courtesy of...?",
        answers: {
            a: "Talon",
            b: "Cassiopeia",
            c: "Darius",
            d: "Riven"
        },
        trueAnswer: "a",
        explanation: "Talon was an assassin sent by Katarina's father to punish her for her errors. The blade just about missed her eye."
    },
    {
        question: "7. Who inspired the 'Glorious Evolution' in Piltover and Zaun?",
        answers: {
            a: "Jayce",
            b: "Viktor",
            c: "Vi",
            d: "Urgot"
        },
        trueAnswer: "b",
        explanation: "Viktor is a believer in mechanical augmentation to remove the failings of one's humanity."
    },
    {
        question: "8. Which yordle has a forever-friendship with the faerie, Pix?",
        answers: {
            a: "Heimerdinger",
            b: "Tristana",
            c: "Lulu",
            d: "Vex"
        },
        trueAnswer: "c",
        explanation: "Lulu encountered Pix, who lead her to the Glade, where she learned to greatly magnify her powers."
    },
    {
        question: "9. Which fearsome figure did Miss Fortune witness murder her family as a child?",
        answers: {
            a: "Nautilus",
            b: "Gangplank",
            c: "Twisted Fate",
            d: "Pyke"
        },
        trueAnswer: "b",
        explanation: "Sarah Fortune witnessed the reaver Gangplank brutally murder her family and burn their workshop. Surviving her wounds, she was determined to get her revenge. "
    },
    {
        question: "10. Who is the brother of the mighty Volibear?",
        answers: {
            a: "Braum",
            b: "Galio",
            c: "Anivia",
            d: "Ornn"
        },
        trueAnswer: "d",
        explanation: "The embodiment of storms, the demigod Volibear is brother to Ornn, the demigod of the forge. Their sister Anivia is a catalyst of change."
    },
    {
        question: "11. Who are the masters of the creatures of the Void?",
        answers: {
            a: "The Watchers",
            b: "The Aspects",
            c: "The Black Rose",
            d: "The Darkin"
        },
        trueAnswer: "a",
        explanation: "Disconcerted by the presence of life, the Watchers bid the creatures of the Void with one task: destruction."
    },
    {
        question: "12. What was the name of the cataclysm that merged the spirit and material realms together in the Blessed Isles?",
        answers: {
            a: "Rune Wars",
            b: "Ruination",
            c: "Void War",
            d: "Fall of Shurima"
        },
        trueAnswer: "b",
        explanation: "The Ruined King, Viego, brought on the Ruination in an attempt to raise his wife from the dead. The attempt created the Shadow Isles."
    },
    {
        question: "13. What is the term 'darkin' roughly translated to in the old tongue?",
        answers: {
            a: "The fallen",
            b: "The righteous",
            c: "The malevolent",
            d: "The lost"
        },
        trueAnswer: "a",
        explanation: "The darkin were once the famed god-warriors of the Shuriman Empire. After fighting against the unleashed Void, they became steadily corrupted."
    },
    {
        question: "14. Jericho Swain embodies which of the three Principles of Strength as a member of the Trifarix?",
        answers: {
            a: "Might",
            b: "Guile",
            c: "Vision",
            d: "Mercy"
        },
        trueAnswer: "c",
        explanation: "Swain embodies the principle, Vision. His co-rulers, Darius and the Pale Lady embody Strength and Guile respectively."
    },
    {
        question: "15. To erase the memory of siphoning the essence of her lover, who did Ahri seek out?",
        answers: {
            a: "The Kinkou",
            b: "The Order of the Shadow",
            c: "The Witch Gardener",
            d: "The Golden Demon"
        },
        trueAnswer: "c",
        explanation: "Ahri siphoned the essence of a man she had loved and saught The Witch Gardener to remove the memory. Although it was painful, she ultimately decided not to erase it."
    },
    {
        question: "16. How does the demon Evelynn draw her power?",
        answers: {
            a: "Deception",
            b: "Inflicting pain",
            c: "Bargains",
            d: "Love"
        },
        trueAnswer: "b",
        explanation: "The demon Evelynn draws her power by inflicting excruciating pain on her victims."
    },
    {
        question: "17. What is the name of the white stone the city of Demacia is built on?",
        answers: {
            a: "Quartzite",
            b: "Marble",
            c: "Granite",
            d: "Petricite"
        },
        trueAnswer: "d",
        explanation: "Demacia is considered a haven away from the horrors of magic. The stone, Petricite, acts to dampen the effects of magic."
    },
    {
        question: "18. What deity does Illaoi serve?",
        answers: {
            a: "Nagakabouros",
            b: "Aurelian Sol",
            c: "Kayle",
            d: "Soraka"
        },
        trueAnswer: "a",
        explanation: "Illaoi is a priest residing in Bilgewater, who calls on the power of the Goddess of Motion, Nagakkabouros."
    },
    {
        question: "19. What justification did the Solari give for denouncing Diana?",
        answers: {
            a: "Her heresy",
            b: "Her betrayal",
            c: "Her evil heart",
            d: "Her lack of interest"
        },
        trueAnswer: "a",
        explanation: "She was denounced for questioning the Solari's teachings and seeking out the heretic faith of the Lunari."

    },
    {
        question: "20. What IS Amumu?",
        answers: {
            a: "A warlord",
            b: "An ancient Emperor",
            c: "A popstar",
            d: "A sad mummy",
        },
        trueAnswer: "d",
        explanation: "He is a very sad mummy."
    }
];

/**
 * The displayData function will output the quizData and ensure one question is displayed on the page at a time.
 */
function displayData() {

    let quiz = quizData[currentQuestion];
    // This variable will contain all the data displayed on the page
    let output = [];
    let answers = [];
    let questionNumber = currentQuestion + 1;

    // Code credit to sitepoint for output of data
    for (letter in quiz.answers) {
        // Include label in the push so user can click on the label to select their answer
        answers.push(`<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${quiz.answers[letter]}
        </label>`);
    }

    output.push(
        `<div class = "page">
        <div class="question"> ${quiz.question} </div>
        <div class="answers"> ${answers.join("")} </div>
        </div>`
    );

    quizArea.innerHTML = output.join("");
}

// Calling the function defined above
displayData();

/**
 * On clicking submit the answer will be checked against the correctAnswer defined in this function and if correct, the score
 * increments by one.
 */
function checkAnswers() {
    let correctAnswer = quizData[currentQuestion].trueAnswer;

    let questionNumber = currentQuestion + 1;
    if (document.querySelector(`input[name="question${questionNumber}"]:checked`)) {
        let checked = document.querySelector(`input[name="question${questionNumber}"]:checked`).value;
        if (checked == correctAnswer === true) {
            score++
            correctAlert();
        } else {
            incorrectAlert();
        }
    } else {
        incorrectAlert();
    }
}

/**
 * Clicking the submit button will take user to the next question in the array until the final question where it'll take the 
 * user to the display of their final score
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

function userProgress() {
    currentProgress.style.width += 5;
}

/**
 * Clicking submit after selecting the right answer will prompt a Correct! alert with an explanation
 */
function correctAlert() {
 let quiz = quizData[currentQuestion];
swal("Correct!", `${quiz.explanation}`)
}

/**
 * Clicking submit after selecting the wrong answer (or no answer) will prompt a Not Quite! alert with an explanation
 */
function incorrectAlert() {
    let quiz = quizData[currentQuestion];
    swal("Not Quite!", `${quiz.explanation}`)
}

/**
 * When submit is clicked on final question, quiz area text is replaced with score area text"
 */
function totalScore() {
    quizArea.innerHTML = (`<a href="https://universe.leagueoflegends.com/en_gb/" aria-label="Link takes user to league of legends website in new tab" target="_blank">Click hear to learn more about Runeterra!</a>`);
    let totalScore = (score / quizData.length * 100);
    if (totalScore < 50) {
    scoreArea.innerHTML = (`Your final score is ${totalScore}%. Better luck next time! Check out the link above to learn more.`)
    } else if (totalScore < 70) {
        scoreArea.innerHTML = (`Your final score is ${totalScore}%. Not bad at all! To buff your knowledge, check out the link above.`)
    } else {
        scoreArea.innerHTML = (`Your final score is ${totalScore}%. You really know your stuff! Well done LoL fan!`)
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
}
