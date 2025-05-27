let str = "Hello World";

// console.log(typeof Number(str)); // number

// console.log(typeof str)

/** Primitive data types : 7 
 *  Number , String, Null, Undifind , bollean , symbol , BigInt
 */
let score = 100;
// console.log(score)

let scoreType = 100.362

// console.log(typeof scoreType) // number

let isLoggedIn = true;
// console.log(isLoggedIn) // boolean
// console.log(typeof isLoggedIn) // boolean

let outSideTEmperature = null;
// console.log(outSideTEmperature) // null
// console.log(typeof outSideTEmperature) // null

/** Referance DataType (Non-Primitive data Type)
 * Object , Array , Function
 */

const Hero = ["Ironman", "Thor", "Hulk", "Captain America"];

Hero.push("Black Widow");

// console.log(Hero.indexOf("Black Widow")) // 4 

// console.log(Hero) // Black Widow

let HeroObject = {
  name: "IronMan",
  age: 45,
  powers: ["Super Strength", "Flight", "Energy Blasts"],
  isAvenger: true,
  address: {
    city: "New York",
    state: "New York",
  },
}
// console.log(HeroObject)'
// console.log(typeof HeroObject)

let heroSecondObject = HeroObject;
heroSecondObject.name = "Thor";

console.log("HeroObject", HeroObject)

// console.log("heroSecondObject", heroSecondObject)

let HeroFunction = function (HeroObject) {
  // console.log(HeroObject.name);
  // console.log(HeroObject.age);
  // console.log(HeroObject.powers);
  // console.log(HeroObject.isAvenger);
  // console.log(HeroObject.address);
  console.log(HeroObject.powers)
} // IronMan 45 (3) ["Super Strength", "Flight", "Energy Blasts"] true {city: "New York", state: "New York"}

// console.log(typeof Hero)


// HeroFunction(HeroObject)

// console.log(HeroFunction(HeroObject)) // IronMan 45 (3) ["Super Strength", "Flight", "Energy Blasts"] true {city: "New York", state: "New York"}


/**
 * ************************************************************NOTE**********************************************************************************
 * 
 *   **What is reffrance  and how reffrance data types work with example and value of reffrance data type store in heap but reffrance is store in stack**
 * 
 * So In refrance data type mai value copy nahi hoti hai ye us data type mai change hota hai jis m hum ne opration perform kiya hai 
 * Aisa is liye hota hai kuki refrance data type k sabhi type heap m store hote hai or unka reffreance hamesha stack mai hota hai to jab bhi reffrance call hota 
 * hai to wo heap mai jata hai or wahi se value ko access karta hai Jis karan value mai hin change ho jate hai pure copy nahi hoti h value
 *
 * reffrance ka address (पता) stack में store होता है।  और असली data (object या array) heap में store होता है। aise samjh sakte hai ki jaise kiki paise vale aadmi k pass jo paisa hai vo hai to uska hi lekin vo jama bank h hota hai matlab ye hai ki paise ka malik to vo hi hai lekin rekhta vo nahi h ab ager paise m change hota hai vo kam ya jayda hota hai to fark to malik ko hi padta hai na ki bank ko is trah jo change hoga vo bank mai pade paiso m direct ho jayega
 * ye reffrance ka concept hai
 */


/**
 *      *******************************************************NOTE*************************************************************************************
 * 
 *                          what is the primitive data type and how the value store of the primitive data type in the stack   
 * 
 * Stack mai store hota hai primitive data type mtlb jo hai vahi hai ager ye as a value save hota hai na ki as a reffrance ab ager kisi variable ki value kisi or variable mai value dali jaye to vo us value ki copy hogi jis ki value dal rehe hai. Ager naye varibale ki value m chane bhi ker dete hai to purani vali value m koi change nahi hoga vo vaise hi rehegi   
 * 
 * */