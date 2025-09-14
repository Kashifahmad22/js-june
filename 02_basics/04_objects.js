//const tinderUser= new Object(); //singleton object 
const tinderUser ={} //non-snigleton object

tinderUser.id="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false



// console.log(tinderUser);    
const regularUser ={
    email:"regularUser@example.com",
    fullname:{
        userFullname:{
            firstname:"kashif",
            lastname:"ahmed"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// const obj3 ={obj1 ,obj2} //nested object    
// const obj3 = Object.assign({},obj1,obj2 )      //merging objects

 //const obj3 = {...obj1,...obj2} //spread operator


//console.log(obj3);  
const users =[
    {
        id:1,
        email:"h@gmail.com"
    }, {
        id:1,
        email:"h@gmail.com"
    }, {
        id:1,
        email:"h@gmail.com"
    },


]
users[1].email
// console.log(tinderUser);

//  console.log(Object.keys(tinderUser));//array of keys
//  console.log(Object.values(tinderUser));      //array of values
//  console.log(Object.entries(tinderUser)); //array of arrays     

// console.log(tinderUser.hasOwnProperty("name")); //true
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
// console.log(tinderUser.hasOwnProperty("email"));         //false    

const course ={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"kashif"
}
//course.sourseConstructor //Object

const {courseInstructor: instructor} = course;  
console.log(instructor);

// {

// "name":"kashif",
// "coursename":"foxleyluxe",
// "price": 999,


// }

[]
