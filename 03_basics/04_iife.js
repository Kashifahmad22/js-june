//Immediately Invoked Function Expression (IIFE)

// create a function and immediately invoke it
//AVOIDING GLOBAL SCOPE POLLUTION


(function chai(){
    console.log("DB CONNECTED");
})();  //() at the end to invoke the function immediately

((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('kashif');