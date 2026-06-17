//how to iterate in objects
const person={
    name:"Sujata",
    age:18,
    "person hobbie":["chess","reading"]
}

//two ways to iterate through objects
//1.for in loop
//2.Objects.key
//Not able to fetch with Dot Notation
// for(let key in person){
//    console.log(person.key);
// }

// // With help of Bracket Notation
for(let key in person){
    console.log(person[key]);
}

//with the help of bracket notation key:value pairs
for(let key in person){
    console.log(key," : " ,person[key]);

}
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

//Objects.keys(person);
console.log(Object.keys(person));
//gives array of keys
console.log(Object.values(person));
//gives array of values

console.log(typeof Object.values(person));
// console.log(val);

for(let key of Object.keys(person)){
    console.log(key);
}
for(let value of Object.values(person)){
    console.log(value);
}