export const progressBar=(time,width)=>{
    let insideBar=document.createElement("div");
    insideBar.classList.add('insideBar');
    insideBar.style.backgroundColor="white";
    insideBar.style.width="350px";
    insideBar.style.top=0;
    insideBar.style.height="10px";
    insideBar.style.display="absolute";

    let outsideBar=document.createElement("div");
    outsideBar.classList.add('outsideBar');
    outsideBar.style.backgroundColor="deeppink";
    outsideBar.style.width="350px";
    outsideBar.style.height="10px";
        outsideBar.style.display="absolute";

    outsideBar.style.top=0;

    let bar=document.createElement("div");
    bar.style.display="absolute";

    bar.classList.add('bar');
    insideBar.appendChild(outsideBar);
    bar.appendChild(insideBar);
    
    window.onload=timerFunction(time,width);
        
    function timerFunction(time,width){
        let interval=width/(time*60);
        let currentWidth=width;
        if(currentWidth>-10){
          setInterval(()=>{
               currentWidth -=interval
            outsideBar.style.width=currentWidth+"px"; 
                             },1000);
            
        }
        else{
            return;
        }
    }
    
    
    
    return bar;
    
    
   
    
    
}