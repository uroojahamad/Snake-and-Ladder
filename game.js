console.log("Snake and Ladder");
const number = [
    [16, 15, 14, 13],
    [9, 10, 11, 12],
    [8, 7, 6, 5],
    [1, 2, 3, 4]
];

function gameBoard() {
    let str = "";

    for (let i = 0; i < number.length; i++) {
        str += `<div class="board">`
        for (let num of number[i]) {
            str += `
                <div class="box-number">
                    <span>${num}</span>
                </div>
            `;
        }
        str += `</div>`
    }
    document.querySelector(".container-board").innerHTML = str;
}

//Roll Dice 
const image = document.querySelector("img");
function rollDice() {
    image.setAttribute("src", "images/dice.gif");
    setTimeout(rollOut, 300);
}

function rollOut() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    image.setAttribute("src", `images/${randomNumber}.png`);
}