# Hermon Asmelash 

## League of Legends Lore Quiz

[Check out the live website here.](https://hasmelash95.github.io/lol-lore)

A quiz for fans of the multiplayer online battle arena game created and developed by Riot Games. The world of League of Legends holds over 140 champions, each with unique backstories, from thirteen different regions with fleshed out lore. The wildly successful Netflix show Arcane, based on the characters in the regions of Piltover and Zaun, has drawn interest from the general public in the lore of LoL. This quiz is designed for fans of the game lore, fans of the game who wish to know about the lore or anyone interested in the world of LoL, to test their knowledge and learn new things. 

![Screenshot 2022-09-20 at 14 52 10](https://user-images.githubusercontent.com/103432143/191276189-dc9fda7a-d89e-423b-bc32-4a7e30c92ca1.png)

## Table of Contents

[User Experience (UX)](#user-experience)

[Features](#features)

[Testing](#testing)

[Technologies Used](#technologies-used)

[Known Bugs](#known-bugs)

[Deployment](#deployment)

[Acknowledgements](#acknowledgements)

## User Experience (UX) <a name="user-experience">

### Strategy

#### User Stories 

1. I'm a huge fan of League of Legends, both the game and the lore and would love to test my knowledge with a challenging but easy to use quiz. 

2. I play League of Legends but I'm not so familiar with the lore, I'd like to see what I know, if anything. 

3. I don't know much about League of Legends but my friends talk about it often, I'd like to try a quiz in the hopes of learning more. 

4. I loved Arcane and wish to know more about the lore of League of Legends. 

5. I wish to get my friends into League of Legends lore and wish to find an easily accessible method to do so. 

#### Why this quiz?

It's a simple web app with no pop ups, no advertisements and easy to use navigation that allows a user to navigation through the questions and restart the quiz whenever, if necessary. It also returns the correct answers with lore explanations when an answer is submitted to spur the interest of novices while enhancing the knowledge of fans. Aria labels ensure that those with impaired vision have no troubles navigating through the site. It also provides a handy external link to the league of legends universe website. 

### Scope

The quiz consists of twenty questions, each with four multiple choice options. There will be no timer or any limits to number of times it can be attempted. The submit button will return whether the selected answer was correct and explain the lore behind the correct answer so users may learn about the world of Runeterra bit by bit. The score at the end will be calculated as a percentage with each question having a weighted value of 1/20. 

### Structure

The landing page will offer an introduction explaining the purpose of the quiz and instructions on how to proceed with a "ready" button that can be clicked when the user is ready. Clicking on the logo at any time will take users to this landing page.

Everytime the "submit answer" button is clicked, an alert will inform the user whether the answer was correct or not, along with an explanation of the lore behind the correct answer. The user can simply press the okay button on the alert box to proceed to the next question. 

Not selecting an answer causes a pop up alert that tells the user to select one. They will not proceed to the next question until they do.

A "restart quiz" button beside the "submit answer" button remains throughout the entirety of the quiz so users can start from the beginning whenever they wish. It will restart the progress bar and reset the score. 

A progress bar below the submit and restart buttons allows users to have steady reminders of how far along they are.  

On clicking "submit answer" after the final question, the quiz area text will be replaced with the external link to the League of Legends website (which opens in a new tab), the "restart quiz" button will remain and the score will be displayed below with custom messages depending on the score. 

A "shuffle questions" button will appear after the user sees their score. Clicking this will reload the page, shuffling the question order. 

### Skeleton 

#### Wireframes

[Landing Page](https://user-images.githubusercontent.com/103432143/179371554-3aec7ae5-1a57-4f32-8e72-22ca8764582f.png)

[Landing Page mobile](https://user-images.githubusercontent.com/103432143/179371583-7c837eee-65cd-415f-9f66-601029bee440.png)

[Quiz Page](https://user-images.githubusercontent.com/103432143/179371643-49a53800-85f6-4aea-bdab-2465ad055d96.png)

[Quiz Page mobile](https://github.com/Hasmelash95/lol-lore/blob/main/README-assets/wireframes/quiz-page-mob.png)

[Quiz Score](https://github.com/Hasmelash95/lol-lore/blob/main/README-assets/wireframes/quiz-page-score.png)

[Quiz Score mobile](https://github.com/Hasmelash95/lol-lore/blob/main/README-assets/wireframes/quiz-page-score-mob.png)

[Quiz Score with Certificate link](https://github.com/Hasmelash95/lol-lore/blob/main/README-assets/wireframes/quiz-page-score-cert.png)

[Certificate](https://user-images.githubusercontent.com/103432143/179371761-0f0c971f-d1ac-4134-8326-49c447e90aab.png)

[Certificate mobile](https://user-images.githubusercontent.com/103432143/179371763-654d6034-8a13-4ce9-b8a2-1d2b46354892.png)

### Surface 

The coloring of the website was chosen with accessibility in mind, ensuring the text stands out against the background. The header used the a shade of white (rgb(233, 238, 240)) to stand out against the background image. While the main text background used the same color with an opacity of 0.8 while the text color was dark blue for the headings (#243356) and almost-black (#0c1322) for the main text. The buttons used the former for their background, although switches to a turquoise shade (rgb(61, 136, 136)) with white text on mouse hover. The text color of the labels of the multiple choice selections also switches to turquoise on mouse hover. 

Fonts were imported from Google Fonts. Open Sans was used for the body of the text (with a sans-serif backup) while Bitter was used for the headings (with a serif backup). The fonts give the site a casual elegance. 

Font awesome icons (a gemstone, to go with the rune theme) were added for the list items, the questions and as decoration for the external link at the end. A gemstone emoji acts as the favicon icon. 

The alert boxes used plugins from sweetalert2, as they are more visually appealing than the default javascript alerts and are easier for the user to read.

## Features <a name="features">

### Landing Page

The landing page has a background image of buildings within Noxus Prime (the capital city of the Noxan Empire). A logo on the left hand side remains present during the different states of the app (the landing page, each question and the certificate page). Clicking on the logo will send the user back to the landing page should they wish to read the contens again. 

![Screenshot 2022-09-20 at 13 35 57](https://user-images.githubusercontent.com/103432143/191258999-ac72f02b-391d-45a6-93f1-4593d9368742.png)

The first paragraph of text offers an introduction so users know what the site is about and draws in their interest. 

![Screenshot 2022-09-20 at 13 36 30](https://user-images.githubusercontent.com/103432143/191259161-ea0ee6e1-fd28-4796-81ed-e5265d4db70b.png)

The second section offers instructions on how to start and proceed with the quiz, giving the user an overview of how the game works. Gemstones are used in liue of bullet points because of similarities to many components of League lore (such as the nexus and hex crystals). 

![Screenshot 2022-09-20 at 13 36 38](https://user-images.githubusercontent.com/103432143/191259190-4a315113-a2f9-45db-b480-ab7f2b66fe4a.png)

The "Ready?" button is a call to action, prompting the user to click on the button (at which point the background and text colors shift) to take them to the quiz page.

### Quiz Section
  
![Screenshot 2022-09-20 at 13 40 57](https://user-images.githubusercontent.com/103432143/191260046-7fb13331-81d6-441b-805d-4d2f49a80068.png)

A question is displayed one at a time against a background image different from the landing page, the vaults of the Shadow Isles. The user selects from the four options (they are able to click on the label or the radio button to do this) and then they simply click on the submit button.
  
![Screenshot 2022-09-20 at 13 43 41](https://user-images.githubusercontent.com/103432143/191260889-cd9ec4e3-f169-428b-92dd-baededd9b9de.png)

An alert box styled by sweetalert2 returns whether the answer was correct with a lore explanation. Correct answers get a "Correct!" message. 

![Screenshot 2022-09-20 at 13 44 06](https://user-images.githubusercontent.com/103432143/191260909-1f5e2c01-0eb1-4639-98da-3a321f6a1874.png)
  
![Screenshot 2022-09-20 at 13 45 23](https://user-images.githubusercontent.com/103432143/191261082-768ea0b0-ef5e-48ce-a4fc-0bde00094e33.png)

Clicking on the wrong answer and submitting prompts another alert box with a "Not Quite!" message, also followed by a lore explanation. The user can click "OK" to remove the alert box, although clicking any area of the page or simply pressing the "enter" button should remove it, allowing them to proceed to the next question.

![Screenshot 2022-09-20 at 13 46 36](https://user-images.githubusercontent.com/103432143/191261374-c7437faf-bfd6-492a-aad6-663df9a14c9b.png)

Not selecting an answer prompts a "You must choose an answer!" alert.
  
![Screenshot 2022-09-20 at 13 47 38](https://user-images.githubusercontent.com/103432143/191261592-65588e2b-7653-4f01-873c-979d982d3f4d.png)

A progress bar is present and updates everytime the user moves on to a new question, the width of the bar increasing incrementally so the user is always aware how far along they are. 
  
![Screenshot 2022-09-20 at 13 54 45](https://user-images.githubusercontent.com/103432143/191263221-0d3ae169-a584-402b-9a14-bdcd2523725b.png)

Submitting the final answer takes the user to their final score, with a custom message depending on the score they've gotten (see below). They also have the opportunity to check out the League of Legends Universe website by clicking the link (which opens in a new tab).Clicking on the "Restart Quiz" button sends them to the first question, with their score and progress bar reset. The "Shuffle Questions" button reloads the page and reorganises the question order.

![Screenshot 2022-09-20 at 13 51 07](https://user-images.githubusercontent.com/103432143/191262760-1d963e9e-4f73-4b81-9da9-f623c7f128c6.png)

The custom message for scores 40-69%:

![Screenshot 2022-09-20 at 13 56 22](https://user-images.githubusercontent.com/103432143/191263594-3bc1efe8-108f-488e-93b3-6a17d4f645e1.png)

The custom message for scores 70% and above - along with a certificate link which opens in a new tab:

![Screenshot 2022-09-20 at 13 59 21](https://user-images.githubusercontent.com/103432143/191264193-cec12fd9-a8d9-413b-b3c4-61a45d7d4217.png)

### Certificate 

The Certificate page uses the background image of Mount Targon - a gruelling journey up a mountain to the top to commune with Aspects. An congratulatory certificate for users who score 70% and above. Users can print certificate if they so wish or save as a PDF and share with friends.

![Screenshot 2022-07-16 at 20 02 15](https://user-images.githubusercontent.com/103432143/179368875-24ab6a16-d11a-4bc5-9a57-2f3cb8cc1c89.png)

Clicking "Restart Quiz" or "Shuffle Questions" will hide the Certificate link once more. 

### Future Features

Possible features to work on in the future:

1. Giving the user the option of inputting a username which will be displayed on the certificate.
2. Adding the option of a timed quiz for those who wish for a larger challenge.
3. Adding more questions.

## Testing <a name="testing">

### Validation 

HTML files were validated using [W3C Markup Validation Service](https://validator.w3.org) with no errors or warnings.

![Screenshot 2022-07-18 at 06 22 13](https://user-images.githubusercontent.com/103432143/179450383-ed5daba5-986d-473c-9912-6bab24e02289.png)

![Screenshot 2022-07-18 at 06 23 15](https://user-images.githubusercontent.com/103432143/179450398-a1839d8b-6741-433a-bb55-4b5a5547e836.png)

![Screenshot 2022-07-18 at 06 25 55](https://user-images.githubusercontent.com/103432143/179450409-e86f31e6-8484-4165-81b3-1cf37606cddb.png)

CSS file was validated using [Jigsaw](https://jigsaw.w3.org/css-validator) with no errors or warnings. 

![Screenshot 2022-07-18 at 06 26 29](https://user-images.githubusercontent.com/103432143/179450507-1ce9028e-9455-43ef-b21d-96dd496f031d.png)

The JS files were run through [JSHint](https://jshint.com) with no significant warnings. 

![Screenshot 2022-09-20 at 14 06 39](https://user-images.githubusercontent.com/103432143/191266324-08a751ff-3acd-4e12-b69d-fba70fb41549.png)

The above refers to a piece of code that was borrowed from the Love Maths Walkthrough for the page load event listener and doesn't seem to effect the overall functionality of the app.

### Performance

Lighthouse tests were carried out (using Developer Tools) on all three pages (including the Certificate page).

Landing Page: 

![Screenshot 2022-07-18 at 06 39 18](https://user-images.githubusercontent.com/103432143/179451266-c024ef3d-096b-4a49-ad33-a31180b553fc.png)

Quiz Page: 

![Screenshot 2022-07-18 at 06 40 17](https://user-images.githubusercontent.com/103432143/179451280-fd691d7d-857f-4cab-bc74-3a073f833b24.png)

Certificate: 

![Screenshot 2022-07-18 at 06 42 42](https://user-images.githubusercontent.com/103432143/179451289-5d9dd487-a732-4868-9d18-4b53dcf4205f.png)

### Functionality

![Screenshot 2022-09-20 at 15 06 43](https://user-images.githubusercontent.com/103432143/191279844-68f4c798-b4e6-4713-a1ed-e0bc47ecef7f.png)

![Screenshot 2022-09-20 at 15 06 56](https://user-images.githubusercontent.com/103432143/191279871-6b4657de-712b-4408-8822-d6a2916341be.png)

![Screenshot 2022-09-20 at 15 07 14](https://user-images.githubusercontent.com/103432143/191279893-d1f44bfd-563e-43f1-af72-87855da4ed9f.png)

![Screenshot 2022-09-20 at 15 07 36](https://user-images.githubusercontent.com/103432143/191279932-d849f2e6-555d-4b3a-87d7-9790e68d829c.png)

![Screenshot 2022-09-20 at 15 07 45](https://user-images.githubusercontent.com/103432143/191279954-ed7d0ceb-f582-42df-9aad-7d61f8c57a64.png)

### Responsive Design

#### Landing Page

![Screenshot 2022-09-20 at 14 28 31](https://user-images.githubusercontent.com/103432143/191271103-fe41bd72-f3d0-40cc-ab15-7259b6baac96.png)

#### Quiz Page 

![Screenshot 2022-09-20 at 14 32 30](https://user-images.githubusercontent.com/103432143/191271383-814fe77a-fa24-4177-8893-6be4a09c804a.png)

#### Quiz Score 

![Screenshot 2022-09-20 at 14 37 53](https://user-images.githubusercontent.com/103432143/191272664-616fff90-26bc-4eb7-81bb-d9edc5f25362.png)

#### Certificate 

![Screenshot 2022-07-18 at 19 32 15](https://user-images.githubusercontent.com/103432143/179579088-fdedc745-8789-4dcc-881f-f7436d393de0.png)

### Browser Compatibility 

Functional tests were carried out on Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, as well as iOS and Android, passing them all. 

### User Stories 

1. I'm a huge fan of League of Legends, both the game and the lore and would love to test my knowledge with a challenging but easy to use quiz.

PASS - The quiz is fun and challenging, though easy to navigate through, and provides fans with the option of getting a certificate which they can download and print. 

2. I play League of Legends but I'm not so familiar with the lore, I'd like to see what I know, if anything.

PASS - The quiz offers feedback with every answer submitted in the form of lore explanations to help fill in the gaps in their knowledge.

3. I don't know much about League of Legends but my friends talk about it often, I'd like to try a quiz in the hopes of learning more.

PASS - The quiz offers feedback with every answer submitted -and- offers a link to the League of Legends Universe website for those unfamiliar with its existence. 

4. I loved Arcane and wish to know more about the lore of League of Legends.

PASS - The quiz includes questions about the characters in the Arcane series so fans of the show can feel a sense of familiarity there. The different topics covered by the quiz offer a gateway to the many different areas of lore not covered by the series. 

5. I wish to get my friends into League of Legends lore and wish to find an easily accessible method to do so.

PASS - The "Restart Quiz" button allows users to attempt the quiz as many times as they'd like, at any point, with their scores being reset. "Shuffle Questions" reorders the questions, which makes for more of a challenge for repeat players. Users can share the quiz with their friends, who can learn in the process as well as gain access to the link to the lore website once they complete the quiz. 

## Technologies Used <a name="technologies-used">

HTML5

CSS3

Git

Gitpod

Github

Balsamiq Wireframes

JavaScript ES6

SweetAlert2

## Known Bugs <a name="known-bugs">

### Fixed Bugs

1. On restarting the game, the progress bar continued to increment. This was fixed by resetting the progress bar value when the restart button was clicked. 
2. Clicking the "submit answer" allowed the user to proceed to the next question even without picking an answer. An alert now pops up telling the user to choose an answer and they cannot proceed to the next question until they do so. 

### Unfixed Bugs

There are no unfixed bugs remaining on the website. 

## Deployment <a name="deployment">

1. Log on to Github.  
1. Set up Github Pages by clicking on the Settings tab, clicking on 'Pages' under 'code and automation'. Change the branch under 'Source' from 'None' to 'Main'. Click on 'Save'.
2. Navigate to the page now using ```(https://hasmelash95.github.io/lol-lore/)```
3. Ensure the directory is in the correct location to commit the changes to the right place. 
4. Use Git to commit changes from Gitpod by typing 'git add .' for every feature added and changes made and 'git commit -m "message here" ' on the Gitpod terminal with a clear but concise message explaining the changes made. 
5. Type 'git push' and refresh the website (updates may take a few minutes) and the changes will appear on the deployed site. Github Pages will pick up the latest commit pushed to the main branch.

To clone the repository: 
1. Log on to your Github account and head to the main page of the repository you wish to clone. 
2. Click on the 'Code' button above the list of files and choose from HTTPS, SSH or Github CLI, to copy the URL provided. 
3. Open terminal and ensure you are in the correct location. 
4. Type in 'git clone' and paste the URL you'd copied in step 2 and press enter. 

## Acknowledgements <a name="acknowledgements">

I would like to thank my friend, Victoria, for her help and support during the JS process. It was my first experience with the language and her help really bolstered my confidence. 

My mentor Brian Macharia for the useful tips and reminders, as well as advice on how to make the app user-friendly and aesthetically appealing. 

League of Legends fans who gave the quiz a try and let me know of any mistakes made on my own end.

Code Institute learning material for teaching me the languages used and helping me to gain a better understanding with their walkthroughs. The event listeners on page load was derived from the Love Maths tutorial. 

[Site Point](https://www.sitepoint.com/simple-javascript-quiz/) - from which I got a huge help with the output of my quiz data (borrowing some of their code, with adjustments, to do so). 

[Simple Steps Code](https://simplestepscode.com/javascript-quiz-tutorial/)

[W3Schools](https://www.w3schools.com)

[MDN](https://developer.mozilla.org/en-US)

[SweetAlert2](https://sweetalert2.github.io)

Elomasney - for introducing me to SweetAlert2 through their project.

[Universe of League of Legends](https://universe.leagueoflegends.com/en_gb)

Background Images from:

[Noxus - Landing Page](https://universe.leagueoflegends.com/en_GB/region/noxus/?mv=image-gallery)

[Shadow Isles - Quiz Page](https://universe.leagueoflegends.com/en_GB/region/shadow-isles/?mv=image-gallery)

[Targon - Certificate](https://universe.leagueoflegends.com/en_GB/region/mount-targon/?mv=image-gallery-1)

















