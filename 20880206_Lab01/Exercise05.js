console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai5(n){
    if(n < 2  ) return "xin moi nhap lai";
    let sum = 0;
    for (let i = 0 ; i <= n ; i++) {
        sum += 1/(2*i+1);
    }
    return "ket qua bai 5: "+sum;
}
console.log(bai5(n));