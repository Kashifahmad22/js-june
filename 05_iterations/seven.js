const myNumbers =[1,2,3,4,5,6,7,8,9,10];

//const newNums =myNumbers.map((num) =>{ return num + 10})

const newNums = myNumbers // start with the array
        .map((num)  => num * 10) // multiply each number by 10
        .map((num) => num + 1) // add 1 to each number
        .filter((num => num>=40)) //filter out numbers less than 40

console.log(newNums);