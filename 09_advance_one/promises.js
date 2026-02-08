const promiseOne = new Promise(function(resolve, reject)
{
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "chai", email:"chai@example.com"})

  }, 1000)
   

})   
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username:"kashif", password:"123"})
    }else{
        reject('ERROR:Something went wrong')
    }
},1000)

})
promiseFour
.then((user)=> {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')  //fetch returns a promise, so we can use then and catch on it.
// fettch is stored in global scope, so we can use it anywhere in our code. 
// It is used to make network requests and it returns a promise that resolves to the response of the request.
//  It is used to fetch data from a server and it is a modern replacement for XMLHttpRequest. 
// It is also used to send data to a server and it is a part of the Fetch API. 
// It is supported in all modern browsers and it is also available in Node.js.          
//when fetch is called, it returns a promise that resolves to the response of the request.it gets divided into two parts, first part is the response and second part is the data. we can use then to get the response and then use another then to get the data from the response.
//data is in json format, so we need to use response.json() to get the data in json format. response.json() also returns a promise, so we can use then to get the data from the response.
//on fulfillment of the promise, we get the response and then we can use response.json() to get the data from the response. response.json() also returns a promise, so we can use then to get the data from the response. if there is any error in the fetch request, we can catch it using catch.
//on rejection of the promise, we can catch the error using catch and log it to the console.
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

