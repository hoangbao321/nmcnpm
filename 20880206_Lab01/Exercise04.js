console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai4(n){
    if(n <= 9 ) return "xin moi nhap lai";
    let sum = 0;
    for (let i = 1 ; i <= n ; i++) {
        sum += 1/(2*i);
    }
    return "ket qua bai 4: "+sum;
}
console.log(bai4(n));