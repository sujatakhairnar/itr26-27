/*
What is typeof in JavaScript?
Typeof in JavaScript is an operator used for type checking 
and returns the data type of the operand passed to it.
*/ 

// Data types

// # Primitive Data Types

// string "abcd"
// number 2,3,4,5.6
// booleans
// undefined
// null
// BigInt
// Symbol

let age=18;
let name="gdfhgf";
console.log(typeof age);
console.log(typeof name);

//convert number to string
 console.log(typeof age); // number
 // after Converting number to string
 console.log(typeof(age + "")); 

 age = age + "";
 console.log(typeof age); 

//other way
let num = 18;
num = String(num);
console.log(typeof num);

//convert string to number
let mystr= +"3";
console.log(typeof mystr);

//other way
let age1="18";
age1=Number(age1);
console.log(typeof age1);