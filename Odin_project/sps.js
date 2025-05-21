let btn1 = document.querySelector("#stone");
let btn3 = document.querySelector("#scissors");  
let btn2 = document.querySelector("#paper");
let btn = document.querySelectorAll(".btn");
const comp = ["btn1","btn2","btn3","btn2","btn2","btn1","btn2","btn3","btn3","btn3","btn1","btn1","btn3","btn2","btn3","btn1"];
let tab = document.querySelector("#reset");
let score1 = document.querySelector("#Score1");
let score2 = document.querySelector("#Score2");

let pscore = 0;
let cscore = 0;

let turn = 0;

// Add event listener to each button

const chick1 = () => {
   console.log("button clicked");
   if ("btn1"  == comp[turn]) {
      console.log("draw");
      tab.innerText = "draw";
    }
    else if ("btn2" == comp[turn]) {
        console.log("Computer wins"); 
        tab.innerText = "Computer wins";
        cscore++;
        score2.innerText = cscore;
        
        }
    else{
        console.log("Player wins");
        tab.innerText = "Player wins";
        pscore++;   
        score1.innerText = pscore;
       
    }
    turn++;
    if(turn == 16){
        if (pscore > cscore){
            alert("Player wins");
            
        }
        else if (cscore > pscore){
            alert("Computer wins");
            
        }
        else{
            alert("draw");
        }
        
    }
}

const chick2 = () => {
   console.log("button clicked");
   if ("btn2"  == comp[turn]) {
      console.log("draw");
      tab.innerText = "draw";
    }
    else if ("btn3" == comp[turn]) {
        console.log("Computer wins"); 
        tab.innerText = "Computer wins";
          cscore++;
        score2.innerText = cscore;
        }
    else{
        console.log("Player wins");
        tab.innerText = "Player wins";
         pscore++;   
        score1.innerText = pscore;
    }
    turn++;
    if(turn == 16){
        if (pscore > cscore){
            alert("Player wins");
            
        }
        else if (cscore > pscore){
            alert("Computer wins");
            
        }
        else{
            alert("draw");
        }
        
    }
}

const chick3 = () => {
   console.log("button clicked");
   if ("btn3"  == comp[turn]) {
      console.log("draw");
      tab.innerText = "draw";
    }
    else if ("btn1" == comp[turn]) {
        console.log("Computer wins"); 
        tab.innerText = "Computer wins";
          cscore++;
        score2.innerText = cscore;
        }
    else{
        console.log("Player wins");
        tab.innerText = "Player wins";
         pscore++;   
        score1.innerText = pscore;
    }
    turn++;
    if(turn == 16){
        if (pscore > cscore){
            alert("Player wins");
            
        }
        else if (cscore > pscore){
            alert("Computer wins");
            
        }
        else{
            alert("draw");
        }
        
    }
}

 

btn.forEach(button => {
    btn1.addEventListener("click",chick1);
    btn2.addEventListener("click",chick2);   
    btn3.addEventListener("click",chick3);
    

});
