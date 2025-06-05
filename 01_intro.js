"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "hello";
console.log(a);
// Functions in TS
function myFunc(userName) {
    console.log("Name is: ".concat(userName));
}
myFunc("rohanshu");
// Arrays inn TS
var myArray = [];
myArray.push(1, 2, 3);
console.log(myArray);
// Unions in TS
var myData = [1, 2, true, "hello"];
console.log(myData);
// literal assignment to a variable
var val;
val = 3;
// val = 4
console.log("val is: ", val);
var myTup1 = ["hello", false, 33];
console.log("tuple val: ", myTup1);
// Drawbbacks of tuple:
myTup1.push(true);
console.log("tuple val: ", myTup1);
