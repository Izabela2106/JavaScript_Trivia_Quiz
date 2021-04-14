
const startBtn=document.querySelector(".startBtn");
const userName=document.querySelector(".userName");
const container=document.querySelector(".container");
const errorMessage=document.querySelector(".errorMessage");





startBtn.addEventListener("click",()=>{
    let nameUser=userName.value;
   if(nameUser.length >2){ localStorage.setItem("playerName",JSON.stringify(nameUser));
     window.location.href = "./categories.html";
               }
    else{
        errorMessage.innerHTML="You need to enter your name";
    }
})









