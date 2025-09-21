// for of  //array specific loop
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
  //  console.log(num);
}

const greetings ="Hello World!"
for (const greet of greetings){
//    console.log(`Each char is ${greet}`)
}


//maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('Fr',"FRANCE")
map.set('IN',"INDIA")  //map is used to map uniique 
//console.log(map);


for (const key in map){
    console.log(key); //map is non-iteratable
    
}

for(const [key , value] of map) {
   // console.log(key,':-',value);
}  


const myObject = {
    'game1':'NFS'
    //'game2':"Spiderman"
}

// for (const [key,value] of myObject){
//     console.log(key,':-',value);
// }

