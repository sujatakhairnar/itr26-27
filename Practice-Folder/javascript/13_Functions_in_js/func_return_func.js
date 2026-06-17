//function returning function
function myfunc(){
    //return "a";
    //return 54;
    //return[1,2,3,4,5,2];
    // return {name:"sujata"};

    //declaration of function
    function hello(){
        return "hello world"
    }

    //function returning function
    return hello;
}
const ans=myfunc();
//console.log(ans);
//calling the function returned function 
// ans();
console.log(ans());

//higher order functions
//callback
//or function returning function 
//or doing both