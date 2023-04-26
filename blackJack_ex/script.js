

let deskHand = [];
let scoreDesk = 0;
let playerHand = [];
let scorePlayer = 0;

let randomNum = Math.ceil(Math.random()*10);



let extrDesk_ = function extrDesk(){
    for (i = 0; i < 2; i++){
        let rand = Math.ceil(Math.random()*10);
        deskHand.push(rand);
        scoreDesk += rand;
    }
    return scoreDesk;
}
let extrPlayer_ = function extrPlayer(){
    for (i = 0; i < 2; i++){
        let rand = Math.ceil(Math.random()*10);
        playerHand.push(rand);
        scorePlayer += rand;
    }
    return scorePlayer;
}
function scoreCalc(){

}

function game(){
    console.log(extrDesk_());
    extrPlayer_();
}


console.log(deskHand);
/* console.log("Desk Score: " + extrDesk()); */
console.log(playerHand);
/* console.log("Player Score: " + extrPlayer()); */