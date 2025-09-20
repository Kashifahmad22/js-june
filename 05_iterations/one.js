//for loop 

// for(let i = 0; i <= 10; i++){
//     const element = i;
//     if (element === 5){
//     console.log("5 is my lucky number");

// }
// //console.log(element)
// }

//console.log(element) //element is not defined because it is block scope


// for(let i=1; i <= 10; i++){
//     console.log(`Outer loop value:${i}`);

//     for(let j=1; j <= 5; j++){

//    // console.log(`Inner loop value is  ${j} and inner loop ${i} `);
//    // console.log(i + '*' + j + '=' + (i * j));   

//     }

// }

let myArr = ["flash","superman","batman"]
//console.log(myArr.length);

for(let index = 0; index < myArr.length; index ++){    
    const element = myArr[index];
    //console.log(element);
}

// break and continue

// for(let i = 1; i <= 20; i++){
//     if(i ==5){
//     console.log(`My Favourite Value is arrived: ${i}`);
//     break
//     }
//     console.log(`Value of i is ${i}`);
// } // once 5 is detetcted loop will be terminated

for(let i = 1; i <= 20; i++){
    if(i ==5){
    console.log(`My Favourite Value is arrived: ${i}`);
    continue
    }
    console.log(`Value of i is ${i}`);

}