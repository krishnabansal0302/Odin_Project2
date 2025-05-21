let btn = document.querySelectorAll(".btn");

let turn = true;//player1 = true, player2 = false

const win =[
     [0, 1, 2],
    [3, 4, 5],
   [6, 7, 8],
     [0, 3, 6],
    [1, 4, 7],
     [2, 5, 8],
    [0, 4, 8],
    [2,4,6]
]



btn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("button clicked");
        if(turn){
            btn.innerText = "X";
            turn = false;
        }
        else{
            btn.innerText = "O";
            turn = true;
        }
        btn.disabled = true;
        check();
    });
});
const check = () => {
    for(let pattern of win){
         let a = btn[pattern[0]].innerText;
         let b = btn[pattern[1]].innerText;
         let c = btn[pattern[2]].innerText;
          if ( a != "" && b != "" && c != "") {
        if(a == b && a == c){
            console.log("winner" , a);
            alert("winner" , a);
        }
        
       
    }
}}
    
