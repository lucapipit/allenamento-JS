

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
let container = document.getElementById("container");

    /* img card */
let cardHolderD = document.getElementsByClassName("imgCardD");
let cardHolderP = document.getElementsByClassName("imgCardP");

/* DOM buttons */
let start = document.getElementById("start");
let fishingP = document.getElementById("fishingP");
let doneP = document.getElementById("doneP");


/* addEvents */
let fishP = fishingP.addEventListener("click", ()=>{
    fishingPlayer();
    imgCardsP();
    return;
});
let donP = doneP.addEventListener("click", ()=>{
    fishingP.style.display = "none";
    smartDesk();
    return;
});
let strt = start.addEventListener("click", ()=>{
    reset();
    game();
    container.style.display = "block";
return;
})




/* Funzione Game */
let game = function game(){
    extrDesk();
    extrPlayer();
    imgCardsP();
    specialScoreP();
    specialScoreD();
    /* turno player */
    cardsP.innerText = "Hand: " + playerHand;
    scoreP.innerText = "Score: " + scorePlayer;
    fishP;
    donP;
    return;
}

/* Funzione Desk automatico */
let smartDesk = function smartDesk(){
    
    for (i = 0; i < 6; i++){
        /* img cards */
        imgCardsD();

        if(scoreDesk >= scorePlayer){
            cardsD.innerText = "Hand: " + deskHand;
            scoreD.innerText = "Score: " + scoreDesk;
            winner.innerText = "Hai Perso";
            fishingP.style.display = "none"; 
            doneP.style.display = "none";
            return;
        }
        fishingDesk();
          /* img cards */
        imgCardsD();
        

        cardsD.innerText = "Hand: " + deskHand;
        scoreD.innerText = "Score: " + scoreDesk;
        if(scoreDesk > 21){winner.innerText = "HAI VINTO!!! Il Desk ha sballato!"; 
            fishingP.style.display = "none"; 
            doneP.style.display = "none"; 
            cardsD.innerText = "Hand: " + deskHand;
            scoreD.innerText = "Score: " + scoreDesk;
            return;}
        
    }
}

/*LIBRERIA FUNZIONI*/

/* Funzione Reset */
let reset = function reset(){
    deskHand = [];
    scoreDesk = 0;
    playerHand = [];
    scorePlayer = 0;
    /* innerText */
    cardsP.innerText = "Hand: ";
    scoreP.innerText = "Score: ";
    cardsD.innerText = "Hand: ";
    scoreD.innerText = "Score: ";
    winner.innerText = "";
    /* Buttons */
    fishingP.style.display = "inline";
    doneP.style.display = "inline";
    return;
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
    cardsP.innerText = "Hand: " + playerHand;
    scoreP.innerText = "Score: " + scorePlayer;
    if(scorePlayer > 21){winner.innerText = "Hai Sballato"; fishingP.style.display = "none"; doneP.style.display = "none";}
    return scorePlayer;
}

/* Funzioni di estrazione */
let extrDesk = function extrDesk(){
    for (i = 0; i < 2; i++){
        let rand = Math.ceil(Math.random()*13);
        deskHand.push(rand);
        
        if(rand == 11||rand == 12||rand == 13){
            scoreDesk += 10;
        }else{
            scoreDesk += rand;
        }
        
    }
    return scoreDesk;
}
let extrPlayer = function extrPlayer(){
    for (i = 0; i < 2; i++){
        let rand = Math.ceil(Math.random()*13);
        playerHand.push(rand);

        if(rand == 11||rand == 12||rand == 13){
            scorePlayer += 10;
        }else{
            scorePlayer += rand;
        }
        
    }
    return scorePlayer;
}

/* assegnazione score corretto */
let specialScoreP = function specialScoreP(){
    if((playerHand.includes(11)||playerHand.includes(12)||playerHand.includes(13))&&playerHand.includes(1)){
        scorePlayer = 21;
    }
    return;
}
let specialScoreD = function specialScoreD(){
    if((deskHand.includes(11)||deskHand.includes(12)||deskHand.includes(13))&&deskHand.includes(1)){
        scoreDesk = 21;
    }
    return;
}

/* Funzione assegnazione carte img */
let imgCardsD = function imgCardsD(){
    for(i = 0; i < deskHand.length; i++){   
        cardHolderD[i].src = "assets/" + deskHand[i] + "_c.png";
    }
}
let imgCardsP = function imgCardsP(){
    for(i = 0; i < playerHand.length; i++){   
        cardHolderP[i].src = "assets/" + playerHand[i] + "_c.png";
    }
}



console.log(cardHolder);