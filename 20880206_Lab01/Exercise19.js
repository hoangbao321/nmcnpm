console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));
let x = parseInt(prompt("nhap x:"));

function bai19() {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let kq = 1;
        let a= 2*i-1;
        while (a > 0) {
            kq *= a
            a--;
        }
        sum += 1/ kq ;
    }
    return "kq bai 19: " + ( 1 + x * sum);
}
console.log(bai19());