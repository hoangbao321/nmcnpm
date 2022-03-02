console.clear();
let prompt = require("prompt-sync")();
let x = parseInt(prompt("nhap x:"));
let n = parseInt(prompt("nhap n:"));
function bai10(){
    return "ket qua bai 10: "+Math.pow(x,n);
}
console.log(bai10());