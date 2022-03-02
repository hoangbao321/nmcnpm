console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));
let x = parseInt(prompt("nhap x:"));

function bai16(){
    let sum =0;
    for (let i = 1; i <= n ; i++) {
        let value=0;
        for (let j = 1 ; j <= i ; j++) {
            value+=j;
        }
        sum+= i/value;
    }
    return "ket qua bai 16: "+x*sum;
}
console.log(bai16());