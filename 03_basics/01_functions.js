// console.log("Functions in JS")

// function sayMyName(){
//     console.log("K");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("F");
   
// }
// sayMyName()

// function addTwoNumbers(num1,num2){
//         console.log(num1+num2);
//     return num1+num2
// }


    // function addTwoNumbers(num1,num2){
    //    // let result = num1 + num2
    //    // return result
    //    // console.log("Hello")  //after return no code will be executed
    //      return num1 + num2
    // }



    // const result = addTwoNumbers(4, 5);
    // console.log("Result:", result)


// function loginUserMessage(username){
// function loginUserMessage(username ="KASHIF"){ //if loop me jaega hi ni kabhii bhii
//     if(username === undefined){
//         console.log("Please enter a username");
//         return  
//     }
//     return `${username} just logged in`
//          }
// loginUserMessage("kashif")  
// console.log(loginUserMessage("kashif"));
// console.log(loginUserMessage("ARAFAT"));


function calculateCartPrice(val1,val2,...num1){  //rest operator
return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Kashif",
    price: 199,
    
}
 function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);

 }
 //handleObject(user)
 handleObject({ 
    username:"kashif",
    price: 1999
 })

 const myNewArray = [200,400,100,600]
 function returnSecondValue(getArray){
    return getArray[1]
 }
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000,2000,3000,4000]));


