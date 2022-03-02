

// let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('------ MAP ------')
// let b = a.map(item => {
//   return item * 2
// })
// console.log("a: "+a);
// console.log("b: "+b);

let  a = [10, 20, 30, 20, 50, 10, 40] ;
let b = [];
// console.log([...new Set(a)]); // làm nhanh 
// sắp xếp mảng
for (let i = 1; i < a.length; i++) {
    let value = a[i];
    while (value < a[i - 1] && i > 0) {
        a[i] = a[i - 1];
        a[i - 1] = value;
        i--;
    }
}
// check kiem tra 
function check(index){
    for (let i = index ; i < a.length ; i++) {
        if( a[i]== a[index] && i != index )
            return false;
    }
    return true;
}

for (let i = 0; i < a.length ; i++) {
    if(check(i)==true){
        b.push(a[i]);
    }
}
let c = [b.length];
let i =0 ;
while(b.length!= 0 ){
    c[i]=b.shift();
    i++;
}
console.log("ket qua bai 27"+c);