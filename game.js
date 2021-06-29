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
                    <div class="box-number" data-number=${box}>
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
function rollDice() {
    image.setAttribute("src", "images/dice.gif");
    setTimeout(rollOut, 300);
}

function rollOut() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    image.setAttribute("src", `images/${randomNumber}.png`);
    setActiveClass(randomNumber);
}

function setActiveClass(randomNumber){
    let activeBox = document.querySelector(".active");
    if (activeBox === null) {
        if (randomNumber === 6 || randomNumber === 1){
            const boxNumber = document.querySelector("[data-number = '1']");
            boxNumber.classList.add("active");
        }
    }
    else{
        const lastBox = document.querySelector(".box-number");
        const lastBoxNumber = parseInt(lastBox.getAttribute("data-number"));
        const count = randomNumber + parseInt(activeBox.getAttribute("data-number"));
        
        if (count < lastBoxNumber){
            activeBox.classList.remove("active");
            const boxNumber = document.querySelector(`[data-number = '${count}']`);
            boxNumber.classList.add("active");
        }
        else if (count === lastBoxNumber){
            activeBox.classList.remove("active");
            const boxNumber = document.querySelector(`[data-number = '${count}']`);
            boxNumber.classList.add("active");
            setTimeout(() => {
                alert("You Won!!!!");
            }, 200);
        }
    }
}