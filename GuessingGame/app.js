// const max = prompt("Enter the maximum range for your guessing number ");
// const random = Math.floor(Math.random()*max) + 1;
// let guess = prompt("Guess the number from 1 to " + max);
// while(true){
//     if(guess === "quit"){
//         alert("Bad Luck!! You quit. The number was " + random);
//         break;
//     }
//     let guessNum = parseInt(guess);
//     if(guessNum === random){
//         console.log(`Congratulations you are right. Answer is: ${random}`);
//         alert(`Congratulations you are right! Answer is: ${random}`);
//         break;
//     }else if(guessNum > random){
//         guess = prompt("hint: Your number is larger. Try again !!");
//     }else {
//         guess = prompt("hint: Your number is smaller. Try again !!");
//     } 
// }





const max = prompt("Enter the maximum range for your guessing number ");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number from 1 to " + max);

while(true){
    // Check if user wants to quit
    if(guess === "quit"){
        alert("Bad Luck!! You quit. The number was " + random);
        break;
    }
    
    let guessNum = parseInt(guess);

    if(guessNum === random){
        console.log(`Congratulations you are right. Answer is: ${random}`);
        alert(`Congratulations you are right! Answer is: ${random}`); // Un-commented this so it actually pops up!
        break;
    } else if(guessNum > random){
        guess = prompt(" Your number is larger. Try again !!");
    } else {
        guess = prompt("hint: Your number is smaller Try again !!");
    } 
}
