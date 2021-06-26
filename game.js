console.log("Snake and Ladder");
const numberArray = [
    [16, 15, 14, 13],
    [9, 10, 11, 12],
    [8, 7, 6, 5],
    [1, 2, 3, 4]
];

function gameBoard() {
    let str = "";
    numberArray.map((row) => {
        str += `<div class="board">`;
        row.map((box) => {
            str += `
                    <div class="box-number">
                        <span>${box}</span>
                    </div>
                `;
        });
        str += `</div>`;
    });
    document.querySelector(".container-board").innerHTML = str;
}

//Roll Dice 
const image = document.querySelector("img");
let randomNumber;
function rollDice() {
    image.setAttribute("src", "images/dice.gif");
    setTimeout(rollOut, 300);
}

function rollOut() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    image.setAttribute("src", `images/${randomNumber}.png`);
}