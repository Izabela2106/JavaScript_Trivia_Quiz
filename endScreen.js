const playAgainBtn=document.querySelector(".playAgainBtn");
const mainPageBtn=document.querySelector(".mainScreenBtn");
const message=document.querySelector('.message');



message.innerHTML=`${JSON.parse(localStorage.getItem('playerName'))}, you scored ${JSON.parse(localStorage.getItem('playerScore'))}! <br>Play again?`;




playAgainBtn.addEventListener("click",()=>{
window.location.href = "categories.html";

})

mainPageBtn.addEventListener("click",()=>{
window.location.href = "index.html";

})