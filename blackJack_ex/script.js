

let deskHand = [];
let scoreDesk = 0;
let playerHand = [];
let scorePlayer = 0;

/* DOM getElement */
let cardsD = document.getElementById("cardsD");
let scoreD = document.getElementById("scoreD");
let cardsP = document.getElementById("cardsP");
let scoreP = document.getElementById("scoreP");
let winner = document.getElementById("winner");

/* DOM buttons */
let start = document.getElementById("start");

let fishingP = document.getElementById("fishingP");
let doneP = document.getElementById("doneP");

/* addEvents */
let fishP = fishingP.addEventListener("click", ()=>{
    let rand = Math.ceil(Math.random()*13);
    playerHand.push(rand);
    scorePlayer += rand;
    cardsP.innerText = "Hand: " + playerHand;
    scoreP.innerText = "Score: " + scorePlayer;
    if(scorePlayer > 21){winner.innerText = "Hai Sballato"; fishingP.style.display = "none"; doneP.style.display = "none";}
    return scorePlayer;
});
let donP = doneP.addEventListener("click", ()=>{
    fishingP.style.display = "none";
    smartDesk();
})


function game(){
    extrDesk();
    extrPlayer();
    
    /* turno player */
    cardsP.innerText = "Hand: " + playerHand;
    scoreP.innerText = "Score: " + scorePlayer;
    fishP;
    donP;
}

/* Funzione Desk automatico */
let smartDesk = function smartDesk(){
    
    for (i = 0; i < 4; i++){
        if(scoreDesk >= scorePlayer){
            cardsD.innerText = "Hand: " + deskHand;
            scoreD.innerText = "Score: " + scoreDesk;
            winner.innerText = "Hai Perso";
            return;
        }
        fishingDesk();
        cardsD.innerText = "Hand: " + deskHand;
        scoreD.innerText = "Score: " + scoreDesk;
        if(scoreDesk > 21){winner.innerText = "HAI VINTO!!! Il Desk ha sballato!"; return;}
        
    }
}

/* Funzioni di Fishing */
let fishingDesk = function fishingDesk(){
    let rand = Math.ceil(Math.random()*13);
    deskHand.push(rand);
    scoreDesk += rand;
    return scoreDesk;
}
let fishingPlayer = function fishingPlayer(){
    let rand = Math.ceil(Math.random()*13);
    playerHand.push(rand);
    scorePlayer += rand;
    return scorePlayer;
}


/* Funzioni di estrazione */
let extrDesk = function extrDesk(){
    for (i = 0; i < 2; i++){
        let rand = Math.ceil(Math.random()*13);
        deskHand.push(rand);
        scoreDesk += rand;
    }
    return scoreDesk;
}
let extrPlayer = function extrPlayer(){
    for (i = 0; i < 2; i++){
        let rand = Math.ceil(Math.random()*13);
        playerHand.push(rand);
        scorePlayer += rand;
    }
    return scorePlayer;
}

/* 
console.log("Desk Score: " + extrDesk());
console.log(deskHand);
console.log("Player Score: " + extrPlayer());
console.log(playerHand);

console.log(fishingDesk());
console.log(deskHand);
console.log(fishingPlayer());
console.log(playerHand);
 */
console.log(game());

/* innerText */

