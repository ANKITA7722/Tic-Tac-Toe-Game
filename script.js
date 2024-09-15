let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");


let turnO = true; //Player-x, player-o

const WinPatterns = [
    (0, 1, 2), (0, 3, 6), (0, 4, 8),
    (1, 4, 7), (2, 5, 8), (2, 4, 6),
    (3, 4, 5), (6, 7, 8),
];

//even listener
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click")
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.Disabled = true;

        checkwinner = () => {

        }
    });

});
const showWinner = (winner) => {
    msg.innerText = `congratulation  winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkwinner = () => {
    for (pattern of WinPatterns) {
        console.log(
            (boxes.pattern[0]).innerText,
            (boxes.pattern[1]).innerText,
            (boxes.pattern[2]).innerText
        );

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value == pos2value && pos2value == pos3value){
                alert("winner", pos1value);
                showWinner(pos1value);

            }
        }
    }
}

