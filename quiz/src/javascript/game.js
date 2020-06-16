
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

localStorage.clear();

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

/* Local JSON file : questions.json */
let questions = [];

/* Local TRIVIA : url */
fetch(
        "https://theageofexiles.imfast.io/quiz/src/json/questions.json"
    ) 
    .then(res => {        
        return res.json();
    })
    .then(loadedQuestions => {   
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = loadedQuestion.answers;
            //formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            // answerChoices.splice(
            //     formattedQuestion.answer - 1, 
            //     0, 
            //     loadedQuestion.answer
            // );

            answerChoices.forEach((choice, index) => {
                formattedQuestion[index + 1] = choice;
            })
            return formattedQuestion;
        }); 
        
        startGame();
    })
    .catch(err => { 
        console.error(err);
    });

/* constants */
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {
    console.log(availableQuestions);

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        /*go to the end page*/
        return window.location.assign("../pages/end.html");
    }

    questionCounter++;
    progressText.innerHTML = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    
    const questionIndex = questionCounter-1;//Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion[number];
    });

    //availableQuestions.shift();

    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return ;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectAnswer = selectedChoice.dataset["number"];

        //const classToApply = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
        // if(classToApply === "correct"){
        //     incrementScore(CORRECT_BONUS);
        // }
        switch(selectAnswer){
            case '1':{
                let point = localStorage.getItem('mostPointsElinthy');
                point++;
                localStorage.setItem('mostPointsElinthy', point);
                break;
            }
            case '2':{
                let point = localStorage.getItem('mostPointsRinori');
                point++;
                localStorage.setItem('mostPointsRinori', point);
                break;
            }
            case '3':{
                let point = localStorage.getItem('mostPointsHiroki');
                point++;
                localStorage.setItem('mostPointsHiroki', point);
                break;
            }
            case '4':{
                let point = localStorage.getItem('mostPointsScarlet');
                point++;
                localStorage.setItem('mostPointsScarlet', point);
                break;
            }
        }

        selectedChoice.parentElement.classList.add('correct');

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove('correct');
            getNewQuestion();
        }, 1000);
    });
});

// incrementScore = num => {
//     score += num;
//     scoreText.innerHTML = score;
// }