window.onload = event => {
    const board = document.getElementById("board");
    const tiles = board.getElementsByTagName("div");
    

    tileLayout();

    function tileLayout() {
        arr = new Array(9);
        lastPlayer = "O";

        for (let shape of tiles) {
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
            }; //End of shape.onlick=(event)
             
        } //End of for loop-(let shape of tiles)
    }//End of function tileLayout
} //End of code
 


