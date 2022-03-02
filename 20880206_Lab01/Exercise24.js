console.clear();
let prompt = require("prompt-sync")();
let key = parseInt(prompt('Nhap gia tri can tim: '));
let a = [7,4,25,17,11,24,10,9,2,1];


// insertion sort big o O(n^2)
// sắp xếp mảng
for (let i = 1; i < a.length; i++) {
    let value = a[i];
    while (value < a[i - 1] && i > 0) {
        a[i] = a[i - 1];
        a[i - 1] = value;
        i--;
    }
}

function  bai24() {

    let index = -1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == key ) {
            return `gia tri ${key} vi tri ${index}`
        }
    }
    let b = [a.length+1];
    let input = key;
    for (let i = 0; i < a.length; i++) {
        
        if (a[i] > input ) {
            b[i]=input;
            input = Number.MAX_VALUE;
        }
        else{
            b[i]=a[i];
        }

    }
    return b;
}


console.log(bai24());