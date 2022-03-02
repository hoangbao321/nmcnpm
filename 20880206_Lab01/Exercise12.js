console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));
let x = parseInt(prompt("nhap x:"));

function bai12(){
    let sum =0 ;
    for (let i = 1; i <= n ; i++) {
        sum+= Math.pow(x,i);
    }
    return "ket qua bai 12: "+sum;
}
console.log(bai12());