let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let changeTurnBtn = document.querySelector("#changeTurn-btn");


let count = 0;

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
};

const changeTurn = () => {
    if (turnO === true) {
        turnO = false;
        msg2.innerText = `current turn : X`
    }
    else{
        turnO = true;
        msg2.innerText = `current turn : O`
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count = count + 1;
        if(turnO) {
            box.innerHTML = '<font color="red">O</font>';
            turnO = false;
        }else{
            box.innerHTML = '<font color="green">X</font>';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();    
    });   
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () => {
    console.log(count)
    
    console.log("help")
    msg.innerText = "Game is a draw,Click New Game to play again"
    msgContainer.classList.remove("hide");
        
};


const checkWinner = () => {
    
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
            else{
                if(count ===9){
                    showDraw();
                    break;
                }

            };  
        };
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
changeTurnBtn.addEventListener("click", changeTurn)