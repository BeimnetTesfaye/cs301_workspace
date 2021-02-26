const prompt = require("prompt-sync")();
const PIN = "123";
let inp = +prompt("please enter the PIN here: ");
//const MAX_GUESS = 3;
//let guessCount = 1;
let counter=1;
while(counter<=3){
    let inp = +prompt("please enter the PIN here: ");
if(inp === PIN ){
    console.log("Correct, welcome back.");
}else if(inp !== PIN ){
    console.log("Incorrect, please try again.");
}else if(inp !== PIN){
    console.log("Sorry but you have been lockedout.");
    
}
counter++;
}