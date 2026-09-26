//table
function printTable(){
    for(let i = 1; i<= 20; i ++ ){
        console.log(i*i*i);
    }

}
// printTable()

//sum 1 - 10;
function getSum(n){
    let sum = 0;
    for(let i = 1; i<=n ; i++){
        sum += i;

    }
    return sum;

}
console.log(sum); //out of scope

//higher order function
function multipleGreet(func, count){
    for (let i=1; i<= count; i++){
        func();
    }
}
function greet(){
    console.log("Hacked");
}
multipleGreet(greet, 3);