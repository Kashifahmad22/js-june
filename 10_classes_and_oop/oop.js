const user = {
  username: "kashif",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){

  // console.log("got user details from database");
 // console.log(`Username: ${this.username}`)
   // console.log(this);
}
    
}

const user2 = {
  username: "kashif",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){

  // console.log("got user details from database");
 // console.log(`Username: ${this.username}`)
   // console.log(this);
}
    
}


console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isSignedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username} welcome back!`);
    }

   // return this;      by default milega hi

}

const userOne  = new User("kashif", 8, true); //use of new keyword to create an instance of the User class.
//  constructor function is called here and a new object is created.
// this keyword inside the constructor function refers to the newly created object.
const userTwo = new User("chai", 12, false);
console.log(userOne.constructor); // User function itself is the constructor of the userOne object.

//console.log(userOne);  
//console.log(userTwo);