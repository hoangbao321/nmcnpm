console.clear();
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Nhap N: "));

function bai3(n){
    if( n < 7) return "Xin moi nhap lai";
    let sum =0;
    for (let i= 1; i <= n; i++) {
        sum += 1/ i;
    }
    return "bai 3 ket qua là : "+ sum;
}
console.log(bai3(n));