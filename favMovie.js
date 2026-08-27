const favMovie =  "avatar";
let guess = prompt("Guess my favorite movie.");
while( (guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess. Try again or type quit to quit.")
}
if(guess == favMovie){
    console.log("Congratulations");
}else{
    console.log("You quit....try again")
}