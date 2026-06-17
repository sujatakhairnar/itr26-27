//and_or_operators
let firstname="Sujata";
let age=16;
if(firstname[0]==="S" && age>18){
    console.log("Name start with S and age is above 18");
}else{
    console.log("Not qualified");
}

if(firstname[0]==="S" || age>18){
    console.log("Name Starts with S and age is above 18");
}else{
    console.log("Not Qualified");
}