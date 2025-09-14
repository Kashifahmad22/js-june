// singleton

//object literals 
const mySym =Symbol("key1")
const mySym_new =Symbol("key2")

const JsUser = {
name :  "kashif",
fullname: "kashif anhmad",
age:23,
[mySym]:"mykey1",
[mySym_new]:"mykey2",
location:"Noida",
email:"kashif@foxley.in",
isLogininDays:["monday","tuesday","wednesday"],


}
// console.log(JsUser.email);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);
// console.log( JsUser.mySym)
// console.log( JsUser.mySym_new)

// JsUser.email ="kashifahmad2000@gmail.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
}


JsUser.greetingTwo =function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());