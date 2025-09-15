

let a =300
if(true){   
let a=10
const b =20
 
}

// console.log(a);
// console.log("INNER:",a);     //10
// console.log(a); //300 

function one(){
    const username = "kashif"
    
    function two(){
        const website = "kashif.com"
        console.log(username);
    }
    //console.log(website); //error
    two();
}
//one();

if (true){
    const username = "kashif"
    if (username === "kashif") {
        const website = "kashif.com"
        //console.log(username  + website);
    }
    //console.log(website); //error
}
//console.log(username); //error

//++++++++++++++++++++++++++++INTERESTING EXAMPLE+++++++++++++++++++++++++++++++
console.log(addone(5)); 
function addone(num){
    return num + 1
}

addTwo(5); //error
const addTwo =function(num){
    return num + 2  
}
