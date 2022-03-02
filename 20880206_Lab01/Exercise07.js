console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai7(n){
    if(n < 1  ) return "xin moi nhap lai";
    let sum = 0;
    for (let i = 1 ; i <= n ; i++) {
        sum += i/(i+1);
    }
    return "ket qua bai 7: "+sum;
}
console.log(bai7(n));