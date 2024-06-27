let gameOn = true;

let count = 0;
let boxElements = document.getElementsByClassName("box");

const winner = ["Player 'O' wins!!!", "Player 'X' wins!!!"];

const playerTurns = ["Player 'O' turn", "Player 'X' turn"];
let messageElement = document.getElementById("message");
messageElement.innerHTML = playerTurns[count % 2];

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

    boxElements[i].addEventListener("click", function () {
        if (count % 2 === 0 && boxElements[i].innerHTML == "" && gameOn) {
            boxElements[i].innerHTML = 'O';
            count++;
            messageElement.innerHTML = playerTurns[count % 2];
            statusElement.innerHTML = "";

            if (count >= 5) {
                if (weHaveAWinner()) {
                    statusElement.innerHTML = winner[0];
                    gameOn = false;
                    messageElement.innerHTML = "";
                }
            }

            if (count >= 9 && gameOn) {
                statusElement.innerHTML = "It's a tie!"
                gameOn = false;
                messageElement.innerHTML = "";
            }


        } else if (count % 2 === 1 && boxElements[i].innerHTML == "" && gameOn) {
            boxElements[i].innerHTML = 'X';
            count++;
            messageElement.innerHTML = playerTurns[count % 2];
            statusElement.innerHTML = "";

            if (count >= 5) {
                if (weHaveAWinner()) {
                    statusElement.innerHTML = winner[1];
                    gameOn = false;
                    messageElement.innerHTML = "";
                }
            }

            if (count >= 8 && gameOn) {
                statusElement.innerHTML = "It's a tie!"
                gameOn = false;
                messageElement.innerHTML = "";
            }

        } else if (gameOn) {
            statusElement.innerHTML = "Note: Box is occupied";
        }
    })

}

function weHaveAWinner() {
    return rowCheck() || colCheck() || diagCheck();
}

function rowCheck() {
    return (
        (boxElements[0].innerHTML === boxElements[1].innerHTML && boxElements[1].innerHTML === boxElements[2].innerHTML && boxElements[0].innerHTML !== "") ||
        (boxElements[3].innerHTML === boxElements[4].innerHTML && boxElements[4].innerHTML === boxElements[5].innerHTML && boxElements[3].innerHTML !== "") ||
        (boxElements[6].innerHTML === boxElements[7].innerHTML && boxElements[7].innerHTML === boxElements[8].innerHTML && boxElements[6].innerHTML !== "")
    );
}

function colCheck() {
    return (
        (boxElements[0].innerHTML === boxElements[3].innerHTML && boxElements[3].innerHTML === boxElements[6].innerHTML && boxElements[0].innerHTML !== "") ||
        (boxElements[1].innerHTML === boxElements[4].innerHTML && boxElements[4].innerHTML === boxElements[7].innerHTML && boxElements[1].innerHTML !== "") ||
        (boxElements[2].innerHTML === boxElements[5].innerHTML && boxElements[5].innerHTML === boxElements[8].innerHTML && boxElements[2].innerHTML !== "")
    );
}

function diagCheck() {
    return (
        (boxElements[0].innerHTML === boxElements[4].innerHTML && boxElements[4].innerHTML === boxElements[8].innerHTML && boxElements[0].innerHTML !== "") ||
        (boxElements[2].innerHTML === boxElements[4].innerHTML && boxElements[4].innerHTML === boxElements[6].innerHTML && boxElements[2].innerHTML !== "")
    );
}

function resetGame() {
    gameOn = true;
    count = 0;
    messageElement.innerHTML = playerTurns[count % 2];
    statusElement.innerHTML = "";
    for(let i = 0; i < boxElements.length; i++){
        boxElements[i].innerHTML = '';
    }
}