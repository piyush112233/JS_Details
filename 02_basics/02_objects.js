// this is the way to difine user object as litrell

const mySym = Symbol("key1")

// console.log(mySym)

let user = {
  name: "Piyush",
  age: "18",
  location: "Jaipur",
  email: "Piyush@google.com",
  is_loggedIn: false,
  lastLogin: ["Monday", "Saturday"],
  "Working As": "Software Devloper",
  [mySym]: "symboltest"
}

// ek method hai obj k liye Object.freez jis mai ager ek bar kisi object ko freez ker diya to aap usme change nahi ker sakte ho\
// Object.freeze(user)
// user.name = "Piyush Belwal"
// console.log(user);

// console.log(user['name'])  these both way to get the value foorm the object 

// console.log(user["Working As"])


// Adding function in object 

user.greeting = function () {
  console.log(`Hello dear ${this.name}, How are you.`)
}

// console.log(user.greeting());
/**     ******************************************************* Object Part-2 *********************************************************************   */

// this method is use to difine the object as singletone

// const tinderUser = new Object();

// console.log(typeof tinderUser);
const tinderUser = {};

tinderUser.id = "123abcd";
tinderUser.name = "Rajveer";
tinderUser.isLoggedIn = false;
tinderUser.isActive = true

// console.log(tinderUser)

// now pushing object inside object

let regularCustomer = {
  custname: "Rahul",
  custEmail: "rahul@google.com",
  address: {
    street: "17 sector",
    area: "Pratap Nager",
    district: "jaipur",
    location: { lat: "12545664", long: "546541654" },
    contact: [{ mob1: 1234567890, mob2: 9876453210 }, ["TEST"]]
  }
}

// console.log(regularCustomer)

tinderUser.customerDetails = regularCustomer;

// console.log(tinderUser.customerDetails.address.location)

let objOne = { 1: "a", 2: "b" }
let objTwo = { 3: "c", 4: "d" }
let objTwo1 = { 5: "e", 6: "f" }


// let objThird = Object.assign({}, objOne, objTwo, objTwo1)  // this is the method to combine to multiple object in one object more then two or ye purane obj ko nahi badelta hai  
let objThird = { ...objOne, ...objTwo, ...objTwo1 }
// Ab is se better ek way or hai jo in ko combine ker sakta hai vo hai spread opration jo array mai bhi padha tha or sath hi ye new object return kerta hai 

// console.log("objThird", objThird)
// console.log("objOne", objOne)

/** Property to get the all keys and values from object in js and ek array m sari keys mil jati hai*/
// console.log(Object.keys(regularCustomer.address.contact[0]))

// same is tarh se hi object se values get ho sakti hai and ek array m mil jati hai

// console.log(Object.values(regularCustomer.address));

// ek method or hota hai entries ker k us m key value ban k array return hota hai

// console.log(Object.entries(regularCustomer));

// in Objectr to check that the key or property is exists in array or not use method hasOwnProperty

// console.log(regularCustomer.hasOwnProperty("custname")) // ager hai to bollean m true deta hai
// console.log(regularCustomer.hasOwnProperty("custName")) // ager nahi hai to bollen mai false deta hai

/*** ******************************************************   Object DeStructure   ********************************************************************** */


const course = {
  coursename: "JavaScript",
  couseDuration: "50 Days",
  courseFees: "3000",
  courseTeacher: "Hitesh Choudhary",
}

const { coursename, couseDuration, courseFees, courseTeacher } = course;
console.log(courseTeacher);