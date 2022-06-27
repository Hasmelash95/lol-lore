// Credit to Love Maths essentials walkthrough for page load event listener code
// Ensure quiz begins running after page finishes loading
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementById("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else if (this.getAttribute("data-type") === "next") {
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
            answers: {
                1: "Camille",
                2: "Caitlin",
                3: "Heimerdinger",
                4: "Seraphine",
            },
            trueAnswer: "2"
        },
        {
            question: "Who killed Vayne's parents?",
            answers: {
                1: "Morgana",
                2: "Jhin",
                3: "Sylas",
                4: "Evelynn",
            },
            trueAnswer: "4"
        },
        {
            question: "Who wields the sentien darkin weapon, Raast?",
            answers: {
                1: "Kayn",
                2: "Varus",
                3: "Darius",
                4: "Jhin",
            },
            trueAnswer: "1"
        },
        {
            question: "Who was the infamous murderer once known as the 'Golden Demon'?",
            answers: {
                1: "Jhin",
                2: "Zed",
                3: "Bel'veth",
                4: "Aatrox",
            },
            trueAnswer: "1"
        },
        {
            question: "Katarina received her scar courtesy of...?",
            answers: {
                1: "Talon",
                2: "Cassiopeia",
                3: "Darius",
                4: "Riven",
            },
            trueAnswer: "1"
        },
        {
            question: "Who inspired the 'Glorious Evolution' in Piltover and Zaun?",
            answers: {
                1: "Jayce",
                2: "Viktor",
                3: "Vi",
                4: "Urgot",
            },
            trueAnswer: "2"
        },
        {
            question: "Which yordle has a forever-friendship with the faerie, Pix?",
            answers: {
                1: "Heimerdinger",
                2: "Tristana",
                3: "Lulu",
                4: "Vex",
            },
            trueAnswer: "3",
        },
        {
            question: "Which fearsome figure did Miss Fortune witness murder her family as a child?",
            answers: {
                1: "Nautilus",
                2: "Gangplank",
                3: "Twisted Fate",
                4: "Pyke",
            },
            trueAnswer: "2"
        },
        {
            question: "Who is the brother of the mighty Volibear?",
            answers: {
            1: "Braum",
            2: "Galio",
            3: "Anivia",
            4: "Ornn",
            },
            trueAnswer: "4"
        },
    ]

}

startQuiz()

checkAnswer()

correctAnswer()

addToScore()

totalScore()



