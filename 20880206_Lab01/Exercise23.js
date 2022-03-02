// let a = [-2,1,-3,4,-1,2,1,-5,4];
let a = [1,-5,-3];

var queue = [];
let min = Number.MAX_VALUE;
for (let i = 0; i < a.length; i++) {
    sum = a[i];
    for (let j = i+1; j < a.length; j++) {
        queue.push(a[j]);
    } 
    while (queue.length!=0)
    {
        sum += queue.shift();
        if(min > sum){min = sum;}
    }
}
console.log("gia tri mang con nho nhat: "+min);