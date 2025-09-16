
const user = {
  name: "Kashif",
  age: 23,
  price:999,

//   welcomeMessage: function () {
//     console.log("Welcome to the website " + this.name);
//   } 
// }

    welcomeMessage: function () {
        console.log(` ${this.name} , Welcome to the website`);
        console.log(this) ;

      } 


    }

    // user.welcomeMessage();
    // user.name = "kashif123"
    // user.welcomeMessage();


    // the globl object for browser wil be the window object likew the component of the window object
    // but in node js the global object is not window its just global object
    // console.log(this); //{}
    // user.welcomeMessage();
    console.log(this); //{} 

    // function chai(){
    //         let uername = "kashif"
    //     console.log(this.usernme); //global object
    // }

    // chai()

    // const chai = function (){
    //     let username = "kashif"
    //     console.log(this.username); //undefined 
    // }


    // const chai =  () =>  {
    //     let username = "kashif"
    //     console.log(this.username); //undefined 
    // }

 //   chai()

//  const addTwo = (num1,num2) => {
// return num1 + num2  

//  } 

 //const addTwo = (num1,num2) =>( num1 + num2 )  // curly braes use krne pe return krna prta hai  

//const addTwo = (num1,num2) => num1 + num2  // without curly braces return is implicit

const addTwo =(num1,num2) =>({username : "kashif"}) // return object  
//curly braces use krne pe object return krna ho to uske aage aur peeche parenthesis lagani prti hai  

 console.log(addTwo(5,6)); // this type of return is called implicit return



