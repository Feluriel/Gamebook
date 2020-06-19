
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const elinthy = localStorage.getItem("mostPointsElinthy");
const scarlet = localStorage.getItem("mostPointsScarlet");
const hiroki = localStorage.getItem("mostPointsHiroki");
const rinori = localStorage.getItem("mostPointsRinori");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const cardHero = document.getElementById("cardHero");
const MAX_HIGH_SCORES = 5;
const scores = [elinthy, scarlet, hiroki, rinori];

var maxValue = Math.max.apply(Math, scores);
var scoresIndex = scores.indexOf(maxValue.toString());
var hero = "";
var imgHero = "";
switch(scoresIndex){
    case 0:{
        hero = "Elinthy";
        imgHero ="../../../images/elinthycard.jpg";
        break;
    }
    case 1:{
        hero = "Rinori";
        imgHero = "../../../images/rinoricard.jpg";
        break;
    }
    case 2:{
        hero = "Hiroki";
        imgHero ="../../../images/hirokicard.jpg";
        break;
    }
    case 3:{
        hero = "Scarlet";
        imgHero ="../../../images/scarlletcard.jpg";
        break;
    }
}

finalScore.innerText = hero;
cardHero.src = imgHero;


