/**
 * Define Object literal with Json Objects
 */

'use strict'
console.clear()

let a = 3;
let obj_a = { a };
console.log("obj_a: ", a);

let b = 4;
let obj_b = { b: b };
console.log("obj_b: ", b);

let student = {
    "SSID": 1,
    "Name": "Ndhuy"
}
console.log(student);

let array = [
    {
        "value": 1,
        "name": "iphone"
    },
    {
        "value": 2,
        "name": "ipad"
    }
];
console.log(array[0].name);

const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);