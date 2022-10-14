window.onload = event => {
    const board = document.getElementById("board");
    const tiles = board.getElementsByTagName("div");
    

    tileLayout();

    function tileLayout() {
        for (let shape of tiles) {
            shape.classList.add("square"); // Adds squares to board     
             
        }
    }
}
 


