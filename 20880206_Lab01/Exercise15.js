console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai15(n){
    let sum =0;
    for (let i = 1; i <= n ; i++) {
        let value=0;
        for (let j = 1 ; j <= i ; j++) {
            value +=j
        }
        sum+= 1/value;
    }
    return "ket qua bai 15: "+sum;
}
console.log(bai15(n));