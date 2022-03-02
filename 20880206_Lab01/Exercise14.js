console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));
let x = parseInt(prompt("nhap x:"));

function bai14(){
    let sum =0 ;
    for (let i = 0; i <= n ; i++) {
        sum+= Math.pow(x,2*i+1);
    }
    return "ket qua bai 14: "+sum;
}
console.log(bai14());