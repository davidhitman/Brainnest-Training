function computerPlay(){
    var pick = ["rock", "paper", "scissors"]
    play = pick[Math.floor(Math.random()*pick.length)]
    return play;
}

function singleRound(compSelection, playerSelection){
    compPoints = 0;
    playerPoints = 0;
    if (compSelection == "rock" && playerSelection == "paper"){
        console.log("The computer choose:"+compSelection);
        console.log("you win");
        playerPoints += 1;
    }
    else if (compSelection == "rock" && playerSelection == "scissors"){
        console.log("The computer choose:"+compSelection);
        console.log("you lose");
        compPoints += 1;
    }
    else if (compSelection == "rock" && playerSelection == "rock"){
        console.log("The computer choose:"+compSelection);
        console.log("it's a draw");
    }
    else if (compSelection == "papper" && playerSelection == "papper"){
        console.log("The computer choose:"+compSelection);
        console.log("it's a draw");
    }
    else if (compSelection == "papper" && playerSelection == "scissors"){
        console.log("The computer choose:"+compSelection);
        console.log("you win");
        playerPoints += 1;
    }
    else if (compSelection == "papper" && playerSelection == "rock"){
        console.log("The computer choose:"+compSelection);
        console.log("you lose");
        compPoints += 1;
    }
    else if (compSelection == "scissors" && playerSelection == "scissors"){
        console.log("The computer choose:"+compSelection);
        console.log("it's a draw");
    }
    else if (compSelection == "scissors" && playerSelection == "papper"){
        console.log("The computer choose:"+compSelection);
        console.log("you lose");
        compPoints += 1;
    }
    else if (compSelection == "scissors" && playerSelection == "rock"){
        console.log("The computer choose:"+compSelection);
        console.log("you win");
        playerPoints += 1;
    }
}
function playRound(){
    let points = singleRound();
    let compSelection = computerPlay();
    console.log("Choose between rock, papper and sisccor");
    for (let i=0; i<5; i++){
        playerSelection = prompt ("Enter your selection:");
        singleRound(playerSelection, compSelection);
    }
}
playRound()