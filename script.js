let gamOver=false;
let ting = new Audio("ting.mp3");
let finish = new Audio("gameover.mp3")
let music = new Audio("music.mp3")

let speaker = document.querySelector(".target img");
speaker.addEventListener("click",()=>{
    let filename = speaker.src.split('/').pop();
    if (filename == "stop.svg") {
        music.play();
        speaker.src = "on.svg";
    } else {
        music.pause();
        speaker.src = "stop.svg";
    }
});

function displaySelection(selection) {
    let frame = document.querySelector(".frame img");
    let imgSrc;
    switch (selection) {
        case 0:
            imgSrc = "rock.png";
            break;
        case 1:
            imgSrc = "paper.png";
            break;
        case 2:
            imgSrc = "scissors.png";
            break;
    }
    frame.src = imgSrc;
}

let wins = 0;
let looses = 0;
let draws = 0;

const selectButton=(value)=>{
    let userinp=parseInt(value);

    

    let computerSelection = Math.floor(Math.random()*3);
    displaySelection(computerSelection);
    let info = document.getElementById("txtbox");
    let userframe = document.querySelector(".userframee");
    switch(computerSelection){
        case 0:
            switch (userinp) {
                case 0:
                    info.innerText = "Oops it's a Tie!";
                    userframe.src = "rock.png";
                    draws++;
                    ting.play();
                    break;
                case 1:
                    info.innerText = "Congrats, You Won!";
                    userframe.src = "paper.png";
                    wins++;
                    ting.play();
                    break;
                case 2:
                    info.innerText = "Bad luck, You lose!";
                    userframe.src = "scissors.png";
                    looses++;
                    ting.play();
                    break;
            }
            break;
        case 1:
            switch (userinp) {
                case 0:
                    info.innerText = "Bad luck, You lose!";
                    userframe.src = "rock.png";
                    looses++;
                    ting.play();
                    break;
                case 1:
                    info.innerText = "Oops it's a Tie!";
                    userframe.src = "paper.png";
                    draws++;
                    ting.play();
                    break;
                case 2:
                    info.innerText = "Congrats, You Won!";
                    userframe.src = "scissors.png";
                    wins++;
                    ting.play();
                    break;
            }
            break;
        case 2:
            switch (userinp) {
                case 0:
                    info.innerText = "Congrats, You Win!";
                    userframe.src = "rock.png";
                    wins++;
                    ting.play();
                    break;
                case 1:
                    info.innerText = "Bad luck, You lose!";
                    userframe.src = "paper.png";
                    looses++;
                    ting.play();
                    break;
                case 2:
                    info.innerText = "Oops it's a Tie!";
                    userframe.src = "scissors.png";
                    draws++;
                    ting.play();
                    break;
            }
            break;
    }
    document.querySelector(".wins").innerText = wins;
    document.querySelector(".looses").innerText = looses;
    document.querySelector(".draws").innerText = draws;
}


function resetGame() {
    finish.play();
    let frame = document.querySelector(".commonframe img");
    frame.src = "questionmark.png";
    let framee = document.querySelector(".userframe img");
    framee.src = "questionmark.png";
    let info = document.getElementById("txtbox");
    info.innerText = "Please click on the buttons below to start the game !";
    wins = 0;
    looses = 0;
    draws = 0;
    document.querySelector(".wins").innerText = wins;
    document.querySelector(".looses").innerText = looses;
    document.querySelector(".draws").innerText = draws;
}


