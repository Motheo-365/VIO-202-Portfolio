let boxes = [...document.querySelectorAll('.box')];
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#newGame-btn');
let msgContainer = document.querySelector('.message-container'); // match HTML
let msg = document.querySelector('#message');
let Overlay = document.querySelector('.overlay');
let turnO = true; // Player O starts
let gameOver = false; // new flag

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const colors = { O: '#b266ff', X: '#d3bfff' };

// Click event
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (box.innerText !== "" || gameOver) return;

        if (turnO) {
            box.innerText = 'O';
            box.style.color = colors.O;
            box.classList.add('O');
        } else {
            box.innerText = 'X';
            box.style.color = colors.X;
            box.classList.add('X');
        }

        turnO = !turnO;
        checkWinner();
    });
});

// Enable all boxes
const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove('X', 'O');
        box.style.color = colors.X;
    });
    gameOver = false;
};

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
    gameOver = true;
};

let overlay = document.querySelector('.overlay');

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // Wait 2 seconds before showing overlay and message
    setTimeout(() => {
        msgContainer.classList.remove('hide');
        Overlay.style.display = 'block';
    }, 1800);
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText
        ) {
            showWinner(boxes[a].innerText);
            return;
        }
    }

    // Draw
    const allFilled = boxes.every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = 'Match Drawn';
        setTimeout(() => {
            msgContainer.classList.remove('hide');
            Overlay.style.display = 'block';
        }, 1200);
        gameOver = true;
    }
};

// Reset hides overlay
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    Overlay.style.display = 'none';
};

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);