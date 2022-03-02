console.clear();
const prompt= require('prompt-sync')();
let n = parseInt(prompt("nhap n: "));

// npm install prompt-sync

function bai28(n){
    let a =0 , b=1;
    let c =1;
    while ( n > 0 )
    {
        c = a+b ;
        a= b;
        b=c;
        n--;
    }
    return c;
}
console.log("ket qua bai 28");
console.log(bai28(n));
