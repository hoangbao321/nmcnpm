console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai8(n){
    if(n <= 5  ) return "xin moi nhap lai";
    let sum = 0;
    for (let i = 0 ; i <= n ; i++) {
        sum += (2*i+1)/(2*i+2);
    }
    return "ket qua bai 8: "+sum;
}
console.log(bai8(n));