const name="kashif"
const repoCount ="50"

console.log(name + repoCount + " Value" );
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName =new String('kashif-bhai-new-module')


//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('i'));
//console.log(gameName.);

 const newString =gameName.substring(0,11)
 console.log(newString);
 

const anotherString = gameName.slice(-10,10)
console.log(anotherString);

const newStringOne ="                          kashif                 "
console.log(newStringOne);
console.log(newStringOne.trim());//trimming a string removing empty spaces

const url ="https://kashifahmad.com/kashif%20ahmad"

console.log(url.replace('%20', '-'))// replacing a element in url with something else

console.log(url.includes('kashif'))// finfing out a word included or not
console.log(url.includes('babbarkhan'))//finfing out whetther a word is includes or not



console.log(gameName.split('-')); // splitting strings 