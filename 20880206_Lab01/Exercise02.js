console.clear();
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Nhap so n "));

function bai2(n){
    if( n < 5 || n >20) return "Xin moi nhap lai";
    let sum =0;
    for (let i= 1; i <= n; i++) {
        sum += Math.pow(i,2);
    }
    return "bai 2 ket qua là : "+ sum;
}
console.log(bai2(n));