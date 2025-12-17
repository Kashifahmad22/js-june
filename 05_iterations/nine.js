const myNums = [1, 2,3];



// const myTotal = myNums.reduce(function (acc,currval){   // acc is accumulator , currval is current value
//     console.log(`acc:${acc} and currval:$currval:${currval}`); // to see how acc and currval change
//     return acc + currval    // add current value to acc and return
// },0// initial value of acc   // if not provided, first element of array is taken as initial value
//     )

//     console.log(myTotal); // 6

const myTotal = myNums.reduce( (acc,curr)=> acc+curr, 0)
console.log(myTotal); //6


const shoppingCart = [

    {        
        itemName:"py course", price:699

    },
    {
        itemName:"js course", price:7799
    },
    {
        itemName:"java course", price:8899   
    },
    {
        itemName:"datascientist", price:10699
    }
]
const pricetopay = shoppingCart.reduce ( (acc,item)=>acc + item.price, 0) // 0 is initial value of acc

console.log(pricetopay); // 29996    