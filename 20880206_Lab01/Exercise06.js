console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai6(n){
    if(n <= 6  ) return "xin moi nhap lai";
    let sum = 0;
    for (let i = 1 ; i <= n ; i++) {
        sum += 1/(i*(i+1));
    }
    return "ket qua bai 6: "+sum;
}
console.log(bai6(n));