// Primitive Datatypes


// 7 types : String ,Number, Boolean, null ,undefined,symbol,BigInt

const score= 100;
const scoreValue= 100.3;

const isLoggedIn = false
const outsideTemp= null
 
let userEmail = undefined

const id = Symbol("123")
const anotherId =Symbol("123")

console.log(id == anotherId);

//const bigNumber=46464669464867486n

// Reference (Non Primitive) 

// Array, Objects, Functions


const heros =["shaktiman","naagraj","doga"]
letmyObj ={
    name:"hitesh",
    age:22


}

const myFunction=function(){
    console.log("HelloWorld")

}

console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++

//stack(Pimitive) will get a copy
//  Heap(non-primitive) will get a reference i.e whatever the changes will do we will be doing in the original value

let myYoutubename =" Thousandworlds"
 let anothername =myYoutubename

 anothername="chaiaurcode"


   console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
 }

 let userTwo = userOne


 userTwo.email= "hitesh@google.com"

 console.log(userOne.email)
 console.log(userTwo.email)

  