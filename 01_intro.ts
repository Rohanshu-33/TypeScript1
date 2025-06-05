var a: string = "hello";
console.log(a);


// Functions in TS

function myFunc(userName: string): void {
    console.log(`Name is: ${userName}`);
}
myFunc("rohanshu");



// Arrays inn TS

const myArray: number[] = [];
myArray.push(1,2,3);
console.log(myArray);



// Unions in TS

const myData: (string | number | boolean)[] = [1, 2, true, "hello"];
console.log(myData);



// literal assignment to a variable

var val:2 | 3
val = 3
// val = 4
console.log("val is: ", val);



// Tuples in TS
type myTupleDefn = [string, boolean, number];
let myTup1: myTupleDefn = ["hello", false, 33];
console.log("tuple val: ", myTup1);


// Drawbbacks of tuple:

// myTup1[1] = true;
myTup1.push(true);
console.log("tuple val: ", myTup1);

export {}