
let a = [10, 20, 30, 20, 50, 10, 40]
let b = [];

function check(index){
    for (let i = 0 ; i < a.length ; i++) {
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
console.log("ket qua bai 26: ");
while(b.length!= 0)
{
    console.log(b.shift());
}
