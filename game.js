const axios=require("axios");
const {progressBar}=require("./components/progressBar/progressBar");
const timer=document.querySelector(".timer");
const question=document.querySelector(".question");
const answers=document.querySelectorAll(".answer");
const scoreDisplay=document.querySelector(".score");
const questionDisplay=document.querySelector(".questionNumber");
const loader=document.querySelector(".loader");
const gameContainer=document.querySelector(".gameContainer");

let isTime;
let time=2;

let isActive=true;
let acceptingAnswer=false;
let correctAnswer=document.createElement('div');
let questions;


var decodeHtmlEntity = function(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  };

const player={
    score:0,
    questionCount:0
}

    function timerClock(time){
    time *=60;
    setInterval(()=>{
        if(time>0){
        time--;
}
     else{
    isTime=false;
    endGame();
    return;
}
    },1000);
}

const bar=progressBar(time,350);
timer.appendChild(bar);





const getQuestions= async(category)=>{
    const questions= await axios.get(`https://opentdb.com/api.php?amount=50&category=${category}&type=multiple`);
  
    return questions.data.results;
}



function newQuestion(){

    if(isTime){
        if(!questions.length){
            endGame();
        }
    player.questionCount++;
    questionDisplay.innerHTML=`Question:${player.questionCount}`
    let randomNumber=Math.floor(Math.random()*questions.length);
    let randomQuestion=questions[randomNumber];
    questions.splice(randomNumber,1);
      
  
    question.innerHTML=randomQuestion.question;
    correctAnswer.innerHTML=randomQuestion.correct_answer;
    let incorectanswers=randomQuestion.incorrect_answers;
    let tempanswers=[];
        
        
    tempanswers.push(correctAnswer.innerHTML);
    incorectanswers.forEach(an=>{
        tempanswers.push(an);
        
    })
        
    tempanswers.sort((a,b)=>0.5-Math.random());
    
    answers.forEach((el,index)=>{
        el.innerHTML=decodeHtmlEntity( tempanswers[index]);
        acceptingAnswer=true;
        
    })
        loader.classList.add('hidden');
        gameContainer.classList.remove('hidden');
    }
    
    
}

answers.forEach(el=>{
    el.addEventListener("click",()=>{
        if(el.innerHTML === correctAnswer.innerHTML && acceptingAnswer){

            el.style.backgroundColor="green";
            player.score++;
            scoreDisplay.innerHTML=`Score:${player.score}`;
            setTimeout(()=>{
                el.style.backgroundColor="white";
                newQuestion();
            },500)
        }
        else if(acceptingAnswer){

            el.style.backgroundColor="red";
            let greenEl=0;
           
               answers.forEach(el=>{
   
    if(el.innerHTML===correctAnswer.innerHTML){
          
                   greenEl=el;
                }
                   
                   
            })
            greenEl.style.backgroundColor="green";
            setTimeout(()=>{
                el.style.backgroundColor="white";
                greenEl.style.backgroundColor="white"

                newQuestion();
            },500)
        }
    })
})


async function startGame(){
    player.score=0;
    isTime=true;
    let catnumber=localStorage.getItem('category');
    questions= await getQuestions(catnumber);
    newQuestion();
    timerClock(time);
   
}


function endGame(){
    localStorage.setItem("playerScore",JSON.stringify(player.score));
   
    
    window.location.href = "endScreen.html";

}
                      
        
        
        
 
    


startGame();






module.exports=startGame;
