console.clear();
let prompt = require("prompt-sync")();
let n = parseInt(prompt("nhap n dong:"));
let m = parseInt(prompt("nhap m cot :"));
let key = parseInt(prompt('Nhap gia tri can tim'));

let a = new Array(n);  // dong
for (let i = 0; i < n; i++) {
    a[i]=new Array(m);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log( a[i][j]= parseInt(prompt(`nhap gia tri ${i}, ${j}:`)));
    }
    console.log();
}

// let a = new Array(2); // cot
// for (let i= 0; i <  2; i++) {
//     a[i]= new Array(3);
// }
// a[0][0]=-1;
// a[0][1]=5;
// a[0][2]=9;

// a[1][0]=6;
// a[1][1]=5;
// a[1][2]=7;

function max_min_key(){
    // tim max
    let max = a[0][0];
    for (let i = 0;  i < n ; i++) {
        for (let j = 0; j < m ; j++) {
            if(max < a[i][j])
            {
                max = a[i][j];
            }
        }
    }
    //tim min
    let min = a[0][0];
    for (let i = 0;  i < n ; i++) {
        for (let j = 0; j < m ; j++) {
            if(min > a[i][j])
            {
                min = a[i][j];
            }
        }
    }
    // key
    let dong = -1 ; let cot= -1;
    for (let i = 0;  i < n ; i++) {
        for (let j = 0; j < m ; j++) {
            if( key == a[i][j])
            {
                dong = i ;
                cot =  j;
            }
        }
    }
    return `gia tri max ${max}, gia tri min ${min}, vi tri gia tri ${key} dong: ${dong} cot: ${cot}`;
}
console.log(max_min_key());
