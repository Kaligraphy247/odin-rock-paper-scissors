/*
get user choice 
make computer make a choice

compare all choices
return results
play 5 rounds
*/

/*
rock “crushes” scissors but is “covered” by paper, paper “covers” rock but
 is “cut” by scissors, and scissors is “crushed” by rock but “cuts” paper. 
 The player who picks the stronger of the two objects is the winner
*/


function playerSection() {
    const playerChoice_i = prompt("Rock, Paper Scissors?", "");
    const playerChoice = playerChoice_i.toLowerCase();
    console.log(`Player's choice: ${playerChoice}.`);
    return playerChoice
}

function computerPlay() {
    let items = [
        "Rock", 
        "Paper",
        "Scissors"]

    
    let item = items[Math.floor(Math.random() * items.length)];
    const computerSelection = item.toLowerCase();
    //return computerSelection
    console.log(`Computer's choice: ${computerSelection}.`)
    return computerSelection
}

const computer = "rock";
function play() {
    playerSection()
    computerPlay()
    
    if (playerSection === computerPlay) { 
        const computer = computerPlay();
        console.log("correct");

    } else {
        console.log("wrong");
    }
}
play()

//playRound()
//document.body.innerHTML 
//computerPlay()

//computerPlay.computerSelection()


