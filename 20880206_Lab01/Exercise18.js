console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n:"));
let x = parseInt(prompt("nhap x:"));

function bai18() {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let kq = 1;
        let a= i
        while (a > 0) {
            kq *= a
            a--;
        }
        sum +=  i / kq;
    }
    return "kq bai 18: " + x * sum;
}
console.log(bai18());