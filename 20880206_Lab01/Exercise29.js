let a = ["cat", "dog", "red", "is"];
let b = [];
let max = a[0].length; //3
let index = 0;
for (let i = 0; i < a.length; i++) {
    if (max < a[i].length) {
        max = a[i].length;
        index = i;
    }
}
b.push(a[index]);
for (let i = 0; i < a.length; i++) {
    if (max == a[i].length && i != index) {
        b.push(a[i]);
    }
}
console.log("ket qua bai 29: ");
while (b.length != 0) {
    console.log(b.shift());
}
