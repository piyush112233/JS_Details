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


let HeroFunction = function (HeroObject) {
  // console.log(HeroObject.name);
  // console.log(HeroObject.age);
  // console.log(HeroObject.powers);
  // console.log(HeroObject.isAvenger);
  // console.log(HeroObject.address);
  console.log(HeroObject.powers)
} // IronMan 45 (3) ["Super Strength", "Flight", "Energy Blasts"] true {city: "New York", state: "New York"}

console.log(typeof HeroFunction)


// HeroFunction(HeroObject)

// console.log(HeroFunction(HeroObject)) // IronMan 45 (3) ["Super Strength", "Flight", "Energy Blasts"] true {city: "New York", state: "New York"}