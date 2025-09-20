const userEmail = [];

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy values


//false
//0,-0
//"" //empty string
//null,BigInt
//null
//0n
//document.all  -- special case
//undefined
//NaN

//truthy values
//"0"," ",[],{},
// 'falsy' //inside a string it is truthy

//example

// if ("0"){
//     console.log("truthy");
// } else{
//     console.log("falsy");
// }

// if (0n){
//     console.log("truthy");
// } else{
//     console.log("falsy");
// }

// if (NaN){
//     console.log("truthy");
// } else{
//     console.log("falsy");
// }

// if (undefined){
//     console.log("truthy");
// } else{
//     console.log("falsy");
// }       

// if (userEmail.length == 0)      {
//     console.log("array is empty");
// } else{
//     console.log("array is not empty");
// }

// const empObj ={}

// if (Object.keys(empObj).length === 0){
//     console.log("object is empty");
// } else{
//     console.log("object is not empty");
// }

//Nullish coalescing operator (??) :null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
val1 = 0 ?? 10  // 0 is not null or undefined so it will take 0
val1 = "" ?? "hello" // "" is not null or undefined so it will take ""
val1 = false ?? true // false is not null or undefined so it will take false

console.log(val1);

//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")