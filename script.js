let gameOn = true;
let count = 0;
let boxElements = document.getElementsByClassName("box");

const winner = ["Player 'O' wins!!!","Player 'X' wins!!!"];

const playerTurns = ["Player 'O' turn","Player 'X' turn"];
let messageElement = document.getElementById("message");
messageElement.innerHTML = playerTurns[count%2];

let statusElement = document.getElementById("status");

for (let i = 0; i < boxElements.length; i++) {

    boxElements[i].addEventListener("mouseenter", function () {
        if (boxElements[i].innerHTML === "" && gameOn) {
            boxElements[i].style.backgroundColor = 'white';
            
        }
    });

    boxElements[i].addEventListener("mouseleave", function () {
        boxElements[i].style.backgroundColor = 'cyan';
    });

    boxElements[i].addEventListener("click", function(){
        if(count%2 === 0 && boxElements[i].innerHTML=="" && gameOn){
            boxElements[i].innerHTML = 'O';
            count++;
            messageElement.innerHTML = playerTurns[count%2];
            statusElement.innerHTML = "";
            

        }else if(count%2 === 1 && boxElements[i].innerHTML=="" && gameOn){
            boxElements[i].innerHTML = 'X';
            count++;
            messageElement.innerHTML = playerTurns[count%2];
            statusElement.innerHTML = "";

        }else if(gameOn){
            statusElement.innerHTML = "Note: Box is occupied";
        }
    })

}