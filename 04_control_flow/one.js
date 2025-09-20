//if

const temperature = 60; 

// if(temperature > 50){
//     console.log("greater than 50");
// } else{
//     console.log("temperature is less than 50");  
// }
  
//<,>,<=,>=2,==,!=,===,!==
//=== checks value and type

const password = "1234";
if(password.length >= 8){
    console.log("strong password");
} else{
    console.log("weak password");
}
// if (score > 100) {
//     let power = "god mode";
//     console.log(`You are in ${power}`);
// }
// console.log(power); //error power is not defined


const balance = 1000;

//if (balance > 500) console.log("test"); //implicit scope
//if (balance > 500) console.log("test"),console.log("test2"); //this  type of practice should be avoided

// if (balance < 500){
//    console.log("less than 500");
// } else if(balance < 700){
//    console.log("less than 700");
// }   else if (balance < 900){
// console.log("less than 900");
// } 
// else{
//     console.log("less than or equal to 1000")
// }



const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3){
    console.log("you can make a purchase");
}
if (LoggedInFromEmail || LoggedInFromGoogle){
    console.log("USER logged in");
}