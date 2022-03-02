console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai11(n){
    let sum =0 ;
    for (let i = 1; i <= n ; i++) {
        let pow = 1;
        for (let j = 1 ; j <= i ; j++) {
            pow *=j ;
        }
        sum += pow;
    }
    return "ket qua bai 11: "+sum;
}
console.log(bai11(n));