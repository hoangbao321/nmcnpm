console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));
let kq=1;
while(n>0)
{
    kq *=n 
    n--;
}
console.log("ket qua bai 17: "+kq);