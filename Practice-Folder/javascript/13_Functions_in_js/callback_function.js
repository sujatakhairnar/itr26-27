// ########### Call back Function  #############

/*
function myfunc(a){
    console.log(a);
    console.log('hello world');
}
myfunc();
myfunc("abc");
myfunc([1,2,3]);
myfunc({name:"abc",age:22});
*/
//--------------------------------------------------------

/*

function myfunc2(){
    console.log("inside my function 2.");
}

function myfunc(callback){
    // here we have passed function
    // console.log(a);
    // calling the passing parameter function;
    callback();
}
// Passing function as argument inside function
myfunc(myfunc2);

*/
// Above is Example of Call back Function

/*
               ########### Call Back Function ###########
A JavaScript callback is a function which is to be executed 
after another function has finished execution.
 A more formal definition would be -
 Any function that is passed as an argument to another 
 function so that it can be executed in that other function
 is called as a callback function.

*/

//-------------------------------------------------------------------
function myfunc(name){
    console.log("inside my function.");
    console.log(`my name is ${name}`);
}
function myfunc1(callback){
    //in the callback function 
    //code execution is done first
    console.log("hello there code is been executed")

    //after execution od above function 
    //callback function is executed
    //which is passed as an argument
    callback("Sujata");
}
//passing function as argument inside function
myfunc1(myfunc); 