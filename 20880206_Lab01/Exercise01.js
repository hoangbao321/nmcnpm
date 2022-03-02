console.clear();
const prompt = require('prompt-sync')();
let n = parseInt(prompt('Nhap so n:'));

function bai1(){
    if(n<3 || n >50){
        return "moi nhap lai";
    }
    let value= 0 ;
    for( i = 1 ; i <= n ; i++ ){
        value += i;
    }
    return value;
}
console.log("Ket qua exercise 1: "+ bai1());