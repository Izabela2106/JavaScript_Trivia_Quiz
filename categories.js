const categories=document.querySelectorAll('.categories div');




categories.forEach(el=>{
    el.style.backgroundColor=el.getAttribute("color");
    el.addEventListener("click",()=>{
        localStorage.setItem("category",el.getAttribute("catNumber"));
        window.location.href = "game.html";

    });
    
})
















