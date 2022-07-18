# Hermon Asmelash 

## League of Legends Lore Quiz

A quiz for fans of the multiplayer online battle arena game created and developed by Riot Games. The world of League of Legends holds over 140 champions, each with unique backstories, from thirteen different regions with fleshed out lore. The wildly successful Netflix show Arcane, based on the characters in the regions of Piltover and Zaun, has drawn interest from the general public in the lore of LoL. This quiz is designed for fans of the game lore, fans of the game who wish to know about the lore or anyone interested in the world of LoL, to test their knowledge and learn new things. 

## Table of Contents

## User Experience (UX)

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

A selection does not need to be made for the quiz to proceed but clicking "submit answer" without choosing a response will be considered an incorrect response. It will still prompt the alert to return the correct answer with the lore explanation so the user learns information no matter what. 

A "restart quiz" button beside the "submit answer" button remains throughout the entirety of the quiz so users can start from the beginning whenever they wish. It will restart the progress bar and reset the score. 

A progress bar below the submit and restart buttons allows users to have steady reminders of how far along they are.  

On clicking "submit answer" after the final question, the quiz area text will be replaced with the external link to the League of Legends website (which opens in a new tab), the "restart quiz" button will remain and the score will be displayed below with custom messages depending on the score. 

### Skeleton 

#### Wireframes

[Landing Page](https://user-images.githubusercontent.com/103432143/179371554-3aec7ae5-1a57-4f32-8e72-22ca8764582f.png)

[Landing Page mobile](https://user-images.githubusercontent.com/103432143/179371583-7c837eee-65cd-415f-9f66-601029bee440.png)

[Quiz Page](https://user-images.githubusercontent.com/103432143/179371643-49a53800-85f6-4aea-bdab-2465ad055d96.png)

[Quiz Page mob](https://user-images.githubusercontent.com/103432143/179371662-2cce353c-3647-48fc-8e14-45f2d3f081e6.png)

[Quiz Score](https://user-images.githubusercontent.com/103432143/179371666-ffe3703c-a0e7-44cc-937d-a91a8cdbc2b7.png)

[Quiz Score mob](https://user-images.githubusercontent.com/103432143/179371757-5abb37b0-e772-4d46-ae1f-870e3f4aab83.png)

[Quiz Score with Certificate link](https://user-images.githubusercontent.com/103432143/179371924-ec2ca91a-d310-4c87-936d-bb0381b869dd.png)

[Certificate](https://user-images.githubusercontent.com/103432143/179371761-0f0c971f-d1ac-4134-8326-49c447e90aab.png)

[Certificate mob](https://user-images.githubusercontent.com/103432143/179371763-654d6034-8a13-4ce9-b8a2-1d2b46354892.png)

### Surface 

The coloring of the website was chosen with accessibility in mind, ensuring the text stands out against the background. The header used the a shade of white (rgb(233, 238, 240)) to stand out against the background image. While the main text background used the same color with an opacity of 0.8 while the text color was dark blue for the headings (#243356) and almost-black (#0c1322) for the main text. The buttons used the former for their background, although switches to a turquoise shade (rgb(61, 136, 136)) with white text on mouse hover. The text color of the labels of the multiple choice selections also switches to turquoise on mouse hover. 

Fonts were imported from Google Fonts. Open Sans was used for the body of the text (with a sans-serif backup) while Bitter was used for the headings (with a serif backup). The fonts give the site a casual elegance. 

Font awesome icons (a gemstone, to go with the rune theme) were added for the list items and as decoration for the external link at the end. A gemstone emoji acts as the favicon icon. 

The alert boxes used plugins from sweetalert2, as they are more visually appealing than the default javascript alerts and are easier for the user to read.


## Features

### Landing Page

The landing page has a background image of buildings within Noxus Prime (the capital city of the Noxan Empire). A logo on the left hand side remains present during the different states of the app (the landing page, each question and the certificate page). Clicking on the logo will send the user back to the landing page should they wish to read the contens again. 

![Screenshot 2022-07-16 at 18 24 37](https://user-images.githubusercontent.com/103432143/179366261-260d7f9a-4895-49f3-94d0-bb9e524ba859.png)

The first paragraph of text offers an introduction so users know what the site is about and draws in their interest. 

![Screenshot 2022-07-16 at 18 25 04](https://user-images.githubusercontent.com/103432143/179366307-88c5d803-d0f7-4fae-8a3a-9b03b2e4053a.png)

The second section offers instructions on how to start and proceed with the quiz, giving the user an overview of how the game works. Gemstones are used in liue of bullet points because of similarities to many components of League lore (such as the nexus and hex crystals). 

![Screenshot 2022-07-16 at 18 49 22](https://user-images.githubusercontent.com/103432143/179366442-69f6e1dc-00ba-452a-b987-f860605d7a99.png)

The "Ready?" button is a call to action, prompting the user to click on the button (at which point the background and text colors shift) to take them to the quiz page.

### Quiz Section

![Screenshot 2022-07-16 at 18 25 47](https://user-images.githubusercontent.com/103432143/179366611-a401f659-525b-4903-a1d2-06250766f291.png)

A question is displayed one at a time against a background image different from the landing page, the vaults of the Shadow Isles. The user selects from the four options (they are able to click on the label or the radio button to do this) and then they simply click on the submit button.

![Screenshot 2022-07-16 at 18 26 17](https://user-images.githubusercontent.com/103432143/179366620-299ba126-edff-4b41-9dba-a091c7fb9155.png)

An alert box styled by sweetalert2 returns whether the answer was correct with a lore explanation. Correct answers get a "Correct!" message. 

![Screenshot 2022-07-16 at 18 26 35](https://user-images.githubusercontent.com/103432143/179366627-15450124-45f1-4a3f-8398-a1a0e2140418.png)

![Screenshot 2022-07-16 at 18 27 01](https://user-images.githubusercontent.com/103432143/179366637-3a7558e9-04fd-4dd9-8412-46d85ce19138.png)

Clicking on the wrong answer and submitting prompts another alert box with a "Not Quite!" message, also followed by a lore explanation. The user can click "OK" to remove the alert box, although clicking any area of the page or simply pressing the "enter" button should remove it, allowing them to proceed to the next question.

![Screenshot 2022-07-16 at 18 27 17](https://user-images.githubusercontent.com/103432143/179366641-553b3782-67d6-45ed-b68c-e233dc02d3de.png)

A progress bar is present and updates everytime the user moves on to a new question, the width of the bar increasing incrementally so the user is always aware how far along they are. 

![Screenshot 2022-07-16 at 18 38 49](https://user-images.githubusercontent.com/103432143/179366667-4feead8c-7e26-442f-8f3e-c3068979079b.png)

Submitting the final answer takes the user to their final score, with a custom message depending on the score they've gotten (see below). They also have the opportunity to check out the League of Legends Universe website by clicking the link (which opens in a new tab).Clicking on the "Restart Quiz" button sends them to the first question, with their score and progress bar reset. 

![Screenshot 2022-07-16 at 18 30 05](https://user-images.githubusercontent.com/103432143/179366784-fa7e0aac-8c6c-4949-856e-79c448de3630.png)

![Screenshot 2022-07-16 at 18 30 52](https://user-images.githubusercontent.com/103432143/179366788-b592304e-375f-43a2-9b87-628d5ff777bc.png)

![Screenshot 2022-07-16 at 18 31 22](https://user-images.githubusercontent.com/103432143/179366792-504c77df-9f54-4985-b34f-d1f2582b3833.png)

The custom message for scores 40-69%:

![Screenshot 2022-07-16 at 18 34 58](https://user-images.githubusercontent.com/103432143/179366800-f5071b0e-7031-407d-985f-11f01248a032.png)

The custom message for scores 70% and above - along with a certificate link which opens in a new tab:

![Screenshot 2022-07-16 at 18 36 43](https://user-images.githubusercontent.com/103432143/179366811-4226573a-c1c6-4c66-9057-58ea360f42d4.png)

### Certificate 

The Certificate page uses the background image of Mount Targon - a gruelling journey up a mountain to the top to commune with Aspects. An congratulatory certificate for users who score 70% and above. Users can print certificate if they so wish or save as a PDF and share with friends.

![Screenshot 2022-07-16 at 20 02 15](https://user-images.githubusercontent.com/103432143/179368875-24ab6a16-d11a-4bc5-9a57-2f3cb8cc1c89.png)

Clicking "Restart Quiz" will hide the Certificate link once more. 

## Testing 

### Validation 

HTML files were validated using W3C Markup Validation Service, with all three showing no errors or warnings.

![Screenshot 2022-07-18 at 06 22 13](https://user-images.githubusercontent.com/103432143/179450383-ed5daba5-986d-473c-9912-6bab24e02289.png)

![Screenshot 2022-07-18 at 06 23 15](https://user-images.githubusercontent.com/103432143/179450398-a1839d8b-6741-433a-bb55-4b5a5547e836.png)

![Screenshot 2022-07-18 at 06 25 55](https://user-images.githubusercontent.com/103432143/179450409-e86f31e6-8484-4165-81b3-1cf37606cddb.png)

CSS file was validated using Jigsaw CSS Validation service, showing no errors or warnings. 

![Screenshot 2022-07-18 at 06 26 29](https://user-images.githubusercontent.com/103432143/179450507-1ce9028e-9455-43ef-b21d-96dd496f031d.png)

The JS files were run through JSHint, showing no significant warnings. 

![Screenshot 2022-07-18 at 06 35 54](https://user-images.githubusercontent.com/103432143/179450600-564c8017-5467-440c-b6a3-8c9b9437ddb5.png)

The above refers to a piece of code that was borrowed from the Love Maths Walkthrough and doesn't seem to effect the overall functionality of the app.

### Performance

Lighthouse tests were carried out (using Developer Tools) on all three pages (including the Certificate page).

Landing Page: 

![Screenshot 2022-07-18 at 06 39 18](https://user-images.githubusercontent.com/103432143/179451266-c024ef3d-096b-4a49-ad33-a31180b553fc.png)

Quiz Page: 

![Screenshot 2022-07-18 at 06 40 17](https://user-images.githubusercontent.com/103432143/179451280-fd691d7d-857f-4cab-bc74-3a073f833b24.png)

Certificate: 

![Screenshot 2022-07-18 at 06 42 42](https://user-images.githubusercontent.com/103432143/179451289-5d9dd487-a732-4868-9d18-4b53dcf4205f.png)

### Functionality

![Screenshot 2022-07-18 at 07 46 52](https://user-images.githubusercontent.com/103432143/179457985-0fea0577-9adb-479a-a182-b2781dbfcf7e.png)

![Screenshot 2022-07-18 at 07 47 25](https://user-images.githubusercontent.com/103432143/179458000-c7e31be0-0631-46ff-8999-c24945a8dc4b.png)

![Screenshot 2022-07-18 at 07 47 48](https://user-images.githubusercontent.com/103432143/179458045-30b0498c-3374-42ae-a27f-63a5df5b0fa6.png)

![Screenshot 2022-07-18 at 07 48 21](https://user-images.githubusercontent.com/103432143/179458052-2858dd3b-b55a-4f98-afb4-8d62ffd53d60.png)













