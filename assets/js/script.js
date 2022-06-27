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
            question: "Who wields the sentient darkin weapon, Raast?",
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
        {
            question: "Who are the masters of the creatures of the Void?",
            answers: {
            1: "The Watchers",
            2: "The Aspects",
            3: "The Black Rose",
            4: "The Darkin",    
            },
            trueAnswer: "1"
        },
        {
            question: "What was the name of the cataclysm that merged the spirit and material realms together in the Blessed Isles?",
            answers: {
                1: "Rune Wars",
                2: "Ruination",
                3: "Void War",
                4: "Fall of Shurima",
            },
            trueAnswer: "2"
        },
        {
            question: "What is the term 'darkin' roughly translated to in the old tongue?",
            answers: {
                1: "The fallen",
                2: "The righteous",
                3: "The malevolent",
                4: "The lost",
            },
            trueAnswer: "1"
        },
        {
            question: "Jericho Swain embodies which of the three Principles of Strength as a member of the Trifarix?",
            answers: {
                1: "Might",
                2: "Guile",
                3: "Vision",
                4: "Mercy",
            },
            trueAnswer: "3"
        },
        {
            question: "To erase the memory of siphoning the essence of her lover, who did Ahri seek out?",
            answers: {
                1: "The Kinkou",
                2: "The Order of the Shadow",
                3: "The Witch Gardener",
                4: "The Golden Demon",
            },
            trueAnswer: "3"
        },
        {
            question: "How does the demon Evelynn draw her power?",
            answers: {
                1: "Deception",
                2: "Inflicting pain",
                3: "Bargains",
                4: "Love",
            },
            trueAnswer: "2"
        },
        {
            question: "What is the name of the white stone the city of Demacia is built on?",
            answers: {
                1: "Quartzite",
                2: "Marble",
                3: "Granite",
                4: "Petricite",
            },
            trueAnswer: "4"
        },
        {
            question: "What deity does Illaoi serve?",
            answers: {
                1: "Nagakabouros",
                2: "Aurelian Sol",
                3: "Kayle",
                4: "Soraka",
            },
            trueAnswer: "1"
        },
        {
            question: "What justification did the Solari give for denouncing Diana?",
            answers: {
                1: "Her heresy",
                2: "Her betrayal",
                3: "Her evil heart",
                4: "Her lack of interest",
            },
            trueAnswer: "1"
        },
        {
            question: "What IS Amumu?",
            answers: {
                1: "A warlord",
                2: "An ancient Emperor",
                3: "A popstar",
                4: "A sad mummy",
            },
            trueAnswer: "4"
        }
    ];

}

checkAnswer()

correctAnswer()

addToScore()

totalScore()



