"use strict";
let a = 1;
let b = 2;
function sum(x, y){
    return x+y;
}
console.log(sum(a, b));
function product(x, y){
    return x*y;
}
console.log(product(a,b));

const palindrome = (s) =>{
    return s;
}

function factorial(a){
    if(a === 0)
        return 1;
    let res = 1;
    while(a != 0){
        res = res * a;
        a-=1;
    }
}

function divide( a,  b){
    return a/b ;
}