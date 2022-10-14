window.onload = event => {
    const board = document.getElementById("board");
    const tiles = board.getElementsByTagName("div");
    const announcer = document.getElementById("status");
    const btn= document.querySelector("button"); //New-game button
    
    let gameEnded, lastPlayer="", arr;

    tileLayout();

    btn.addEventListener("click", function(){
        gameEnded= false;
        lastPlayer = "O";
        
        arr= new Array(9);
    
        announcer.classList.remove("you-won");
        announcer.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        
        for(shape of tiles){
          shape.classList.remove("X");
          shape.classList.remove("O");
          shape.innerText = "";          
        }
    }); //New-Game Button

    function tileLayout() {
        gameEnded= false;
        arr = new Array(9);
        lastPlayer = "O";

        let index= 0;
        for (let shape of tiles) {
            shape.id = index++; // Allow players to alternate
            shape.classList.add("square"); // Adds squares to board
            
            shape.onclick = (event) => {
    
                if (lastPlayer === "X") {
                    event.target.innerText = "O";
                    event.target.classList.add("O");
                    arr[event.target.id] = "O";
                    lastPlayer = "O"; //Adds O to square if lp=X
                }
                else if (lastPlayer === "O") {
                    event.target.innerText = "X";
                    event.target.classList.add("X");
                    arr[event.target.id] = "X";
                    lastPlayer = "X"; //Adds X to square if lp=O
                }

                WhoWon(lastPlayer); //Determining winner

            }; //End of shape.onlick=(event)
             
            shape.onmouseover = event =>{
                if(!gameEnded){
                    event.target.classList.toggle("hover");
                } 
            }; // Change tile color to coral when hovered
    
            shape.onmouseleave = event =>{
                event.target.classList.remove("hover");
            }; // Tile color goes back to normal when its not hovered

        } //End of for loop-(let shape of tiles)

        //Determining the winner
        WhoWon = (lp) => {    
            if ((arr[0]===lp && arr[1]===lp && arr[2]===lp) ||
                (arr[3]===lp && arr[4]===lp && arr[5]===lp) ||
                (arr[6]===lp && arr[7]===lp && arr[8]===lp) ||
        
                (arr[0]===lp && arr[3]===lp && arr[6]===lp) ||
                (arr[1]===lp && arr[4]===lp && arr[7]===lp) ||
                (arr[2]===lp && arr[5]===lp && arr[8]===lp) ||
                
                (arr[0]===lp && arr[4]===lp && arr[8]===lp) ||
                (arr[2]===lp && arr[4]===lp && arr[6]===lp) ){
                    announcer.classList.add("you-won");
                    announcer.innerHTML= `Congratulations! ${lp} is the winner!`;
                    gameEnded=true;
                }
        } //End of WhoWon
    } //End of function tileLayout
} //End of code
 


