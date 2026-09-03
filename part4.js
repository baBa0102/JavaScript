// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }

// }

// console.log(arr);

// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy>0){
//     count++;
//     sum+= digit;
//     copy = Math.floor(copy/10);
// }
// console.log(count);
// console.log(sum);

//factorial 
// let num = 5;
// let factorial = 1;
// for(let i = 1; i<=num; i++){
//     factorial = factorial * i;
// }
// console.log(factorial)


//largest number in an array
let arr =[ 1,2,3,4,3,9,7,3];
let larNum = 0;
for(let i = 0; i<= arr.length; i++){
    if(larNum < arr[i]){
        larNum = arr[i];
    }
}
console.log(larNum);
