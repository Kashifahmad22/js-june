const score=50;
console.log(typeof(score));
console.log(score);
console.log(`Hi I'm kashif and I have scored ${ score} in one day test match`)

const balance =new Number(100)
 console.log(balance);


 console.log(balance.toString().length);
 console.log(balance.toFixed(2));
 const otherNumber =1123.9455

 console.log(otherNumber.toPrecision(4));

 const hundreds=10000
 console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++        MATHS     ++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5656));
console.log(Math.ceil(4.2584));
console.log(Math.floor(4.999));
console.log(Math.min(4,5,6,7,8,9));
 console.log(Math.max(4,5,6,7,8,9));

console.log(Math.random());// gives value between 0 and 1
console.log((Math.random()*10) + 1); // value is multiplied with 10 make it significant
console.log(Math.floor(Math.random()*10)+1);// even if math.floor gives value 0 then +1 is added to the number 
//gives value greater than 0

const min = 10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// value are set accordingly w.r.t to the condition mentioned 
// even if the value gets exhausted then also we'll get min value



