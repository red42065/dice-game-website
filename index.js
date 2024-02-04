let player1 = Math.floor((Math.random() * 6)) + 1;
let player2 = Math.floor((Math.random() * 6)) + 1;

let p1 = document.querySelector(".img1");
let p2 = document.querySelector(".img2");

switch(player1){
    case 1:
        p1.setAttribute("src","./images/dice1.png");
        break;
    case 2:
        p1.setAttribute("src","./images/dice2.png");
        break;
    case 3:
        p1.setAttribute("src","./images/dice3.png");
        break;
    case 4:
        p1.setAttribute("src","./images/dice4.png");
        break;
    case 5:
        p1.setAttribute("src","./images/dice5.png");
        break;
    case 6:
        p1.setAttribute("src","./images/dice6.png");
        break;
    default:
        break;  
}

switch(player2){
    case 1:
        p2.setAttribute("src","./images/dice1.png");
        break;
    case 2:
        p2.setAttribute("src","./images/dice2.png");
        break;
    case 3:
        p2.setAttribute("src","./images/dice3.png");
        break;
    case 4:
        p2.setAttribute("src","./images/dice4.png");
        break;
    case 5:
        p2.setAttribute("src","./images/dice5.png");
        break;
    case 6:
        p2.setAttribute("src","./images/dice6.png");
        break;
    default:
        break;  
}

if (player1 > player2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} 
else {
    document.querySelector("h1").innerHTML = "It's a Tie!";
}
