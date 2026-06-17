const users=[
    {
    userid:1,
    username:"Sujata",
    gender:"female"},
    {
    userid:2,
    username:"Yogita",
    gender:"female"},
    {
    userid:3,
    username:"Shreyash",
    gender:"male"},          
]
/*
// Here we Destructured Array
// Where we have Objects as Value in it;
const[user1,user2,user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);
*/

// Now These Object also have key value pairs in it 
// how can we destructure it

/*
const[{user_name},,{gender}] = users;
console.log(user_name);
console.log(gender);
*/

//assigning variable as well
const[{username:user1_username,userid},{gender:user3_gender}]=users;
console.log(user1_username);
console.log(user3_gender);
console.log(userid);