let age=18;
let firstname="Sujata";
let about_me= "My name is "+firstname+ " and my age is " +age;
console.log(about_me);

//other method
let about=`my name is ${firstname} and my age is ${age}`;
console.log(about);

/*
In JavaScript, the template string implements the string 
interpolation. A template string is defined by wrapping 
a sequence of characters into a pair of backticks 
`I'm template string` . 
The template string placeholders have the format ${expression} , 
for example `The number is ${number}` .
*/