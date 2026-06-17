// #1. Trim Method.

/* 
The trim() method in Java String is a built-in 
function that eliminates leading and trailing spaces.
*/
let firstname="Sujata";
console.log(firstname.length);
firstname.trim();
console.log(firstname.length); 
// No Change
// As strings are immutable the output will be new string
// in string constant  pool;
// we need to make new variable to assign that value or it will
// Garbage collected later.

// Storing in completely new Variable
let newstring =firstname.trim();
console.log(newstring);
console.log(newstring.length);
console.log(firstname.length);

// Storing in old Variable itself and modifying it
firstname=firstname.trim();
console.log(newstring);
console.log(newstring.length);
console.log(firstname.length);


