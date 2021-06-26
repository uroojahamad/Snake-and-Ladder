console.log("Snake and Ladder");
const number = [
    [16, 15, 14, 13],
    [9, 10, 11, 12], 
    [8, 7, 6, 5], 
    [1, 2, 3, 4] 
];

function gameBoard(){
    let str = "";

    for (let i = 0; i < number.length; i++) {
        console.log(i, number[i]);
        str += `<div class="board">`
        for (let num of number[i]) {
            console.log(num);
            str += `
                <div class="box-number">
                    <span>${num}</span>
                </div>
            `;
        }
        str += `</div>`
    }
    console.log(str);
    document.querySelector(".container-board").innerHTML = str;
}
