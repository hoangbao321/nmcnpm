console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));

function bai9(n){
    if(n <= 6  ) return "xin moi nhap lai";
    let pow = 1;
    for (let i = 1 ; i <= n ; i++) {
        pow *=i ;
    }
    return "ket qua bai 9: "+pow;
}
console.log(bai9(n));