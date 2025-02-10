let gameSeq = [];
let userSeq = [];

let h4 = document.querySelector("h4");
let btns = ["yellow", "red", "violet", "green"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started!");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    if (btn) {
        btn.classList.add("flash");
        setTimeout(() => {
            btn.classList.remove("flash");
        }, 200);
    } else {
        console.error("Invalid button for game flash.");
    }
}

function userFlash(btn) {
    if (btn) {
        btn.classList.add("userflash");
        setTimeout(() => {
            btn.classList.remove("userflash");
        }, 200);
    } else {
        console.error("Invalid button for user flash.");
    }
}

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length); // FIXED: Ensure all indices are considered
    let randColor = btns[randIdx];

    if (randColor) {
        let randBtn = document.querySelector(`.${randColor}`);
        if (randBtn) {
            gameSeq.push(randColor);
            gameFlash(randBtn);
        } else {
            console.error(`Button with class '${randColor}' not found.`);
        }
    } else {
        console.error("Random color not selected correctly.");
    }
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        h4.innerHTML = `Game Over! <strong> your score was ${level} </strong><br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box");
allBtns.forEach((btn) => {
    btn.addEventListener("click", btnPress);
});

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

function addFooter() {
    let footer = document.createElement("footer");
    let footerSelect = document.querySelector("footer");
    
    
}