// Credit to Love Maths essentials walkthrough for page load event listener code
// Ensure quiz begins running after page finishes loading
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByClass("quiz-btn");
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

// Using arrays for the questions allows us to iterate over the questions
    let quizData = [
        {
            question: "The great Empire of Shurima was destroyed after which Champion betrayed the Emperor?",
            answers: {
                a: "Sivir",
                b: "Nasus",
                c: "Xerath",
                d: "Renekton",
            }, 
            trueAnswer: "c"
        },
        {
            question: "Who is the Sheriff of Piltover?",
            answers: {
                a: "Camille",
                b: "Caitlin",
                c: "Heimerdinger",
                d: "Seraphine",
            },
            trueAnswer: "b"
        },
        {
            question: "Who killed Vayne's parents?",
            answers: {
                a: "Morgana",
                b: "Jhin",
                c: "Sylas",
                d: "Evelynn",
            },
            trueAnswer: "d"
        },
        {
            question: "Who wields the sentient darkin weapon, Raast?",
            answers: {
                a: "Kayn",
                b: "Varus",
                c: "Darius",
                d: "Jhin",
            },
            trueAnswer: "a"
        },
        {
            question: "Who was the infamous murderer once known as the 'Golden Demon'?",
            answers: {
                a: "Jhin",
                b: "Zed",
                c: "Bel'veth",
                d: "Aatrox",
            },
            trueAnswer: "a"
        },
        {
            question: "Katarina received her scar courtesy of...?",
            answers: {
                a: "Talon",
                b: "Cassiopeia",
                c: "Darius",
                d: "Riven",
            },
            trueAnswer: "a"
        },
        {
            question: "Who inspired the 'Glorious Evolution' in Piltover and Zaun?",
            answers: {
                a: "Jayce",
                b: "Viktor",
                c: "Vi",
                d: "Urgot",
            },
            trueAnswer: "b"
        },
        {
            question: "Which yordle has a forever-friendship with the faerie, Pix?",
            answers: {
                a: "Heimerdinger",
                b: "Tristana",
                c: "Lulu",
                d: "Vex",
            },
            trueAnswer: "c",
        },
        {
            question: "Which fearsome figure did Miss Fortune witness murder her family as a child?",
            answers: {
                a: "Nautilus",
                b: "Gangplank",
                c: "Twisted Fate",
                d: "Pyke",
            },
            trueAnswer: "b"
        },
        {
            question: "Who is the brother of the mighty Volibear?",
            answers: {
                a: "Braum",
                b: "Galio",
                c: "Anivia",
                d: "Ornn",
            },
            trueAnswer: "d"
        },
        {
            question: "Who are the masters of the creatures of the Void?",
            answers: {
                a: "The Watchers",
                b: "The Aspects",
                c: "The Black Rose",
                d: "The Darkin",    
            },
            trueAnswer: "a"
        },
        {
            question: "What was the name of the cataclysm that merged the spirit and material realms together in the Blessed Isles?",
            answers: {
                a: "Rune Wars",
                b: "Ruination",
                c: "Void War",
                d: "Fall of Shurima",
            },
            trueAnswer: "b"
        },
        {
            question: "What is the term 'darkin' roughly translated to in the old tongue?",
            answers: {
                a: "The fallen",
                b: "The righteous",
                c: "The malevolent",
                d: "The lost",
            },
            trueAnswer: "a"
        },
        {
            question: "Jericho Swain embodies which of the three Principles of Strength as a member of the Trifarix?",
            answers: {
                a: "Might",
                b: "Guile",
                c: "Vision",
                d: "Mercy",
            },
            trueAnswer: "c"
        },
        {
            question: "To erase the memory of siphoning the essence of her lover, who did Ahri seek out?",
            answers: {
                a: "The Kinkou",
                b: "The Order of the Shadow",
                c: "The Witch Gardener",
                d: "The Golden Demon",
            },
            trueAnswer: "c"
        },
        {
            question: "How does the demon Evelynn draw her power?",
            answers: {
                a: "Deception",
                b: "Inflicting pain",
                c: "Bargains",
                d: "Love",
            },
            trueAnswer: "b"
        },
        {
            question: "What is the name of the white stone the city of Demacia is built on?",
            answers: {
                a: "Quartzite",
                b: "Marble",
                c: "Granite",
                d: "Petricite",
            },
            trueAnswer: "d"
        },
        {
            question: "What deity does Illaoi serve?",
            answers: {
                a: "Nagakabouros",
                b: "Aurelian Sol",
                c: "Kayle",
                d: "Soraka",
            },
            trueAnswer: "a"
        },
        {
            question: "What justification did the Solari give for denouncing Diana?",
            answers: {
                a: "Her heresy",
                b: "Her betrayal",
                c: "Her evil heart",
                d: "Her lack of interest",
            },
            trueAnswer: "a"
        },
        {
            question: "What IS Amumu?",
            answers: {
                a: "A warlord",
                b: "An ancient Emperor",
                c: "A popstar",
                d: "A sad mummy",
            },
            trueAnswer: "d"
        }
    ];

function runQuiz(){

function displayData(questions, quizArea) {
    // This variable will contain all the data displayed on the page
    let output = [];
    let answers;

    // This applies to each question in the array
    for (let i = 0; i < questions.length; i++) {
        answers = [];

        for (letter in questions[i].answers) {
            answers.push(`<label>
            <input type="radio" name="question${questions[i]}" value="${letter}">
            ${letter} : ${questions[i].answers[letter]}
            </label>`);
        }

        output.push(
            `<div class="question"> ${questions[i].question} </div>
            <div class="answers"> ${answers.join("")} </div>`
          );
    }

    quizArea.innerHTML = output.join("")
}

function checkAnswer()

function correctAnswer()

function addToScore()

function totalScore()

}



