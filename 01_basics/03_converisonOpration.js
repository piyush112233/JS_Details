let score = 9856;

let scoreString = "22151abc"
// console.log("Score: " + typeof score); // Score: 9856

scoreString = Number(scoreString) // 22151

/**
 * Ager string ko number me convert kar rehe hai or string mai alpha numeric value hai to Data type number to aa jayega lekin value number me convert nahi ho payegi or NAN value milega or NAN ka type number hota hai 
 */
// console.log("scoreString", scoreString) // scoreString NAN

// console.log("scoreString: " + typeof scoreString); // Score: 22151


// now i will convert null to number and let see the result


let nullValue = null;

let nulltoNumber = Number(nullValue) // 0
// console.log("nullValue: " + typeof nulltoNumber); // nullValue: object
// console.log("nulltoNumber: ", nulltoNumber); // nulltoNumber: number
// when null is converted to number it will give 0 and data type will be Number

// now i will convert undefined to number and let see the result
let undefinedValue = undefined;
let undefinedToNumber = Number(undefinedValue) // NaN
// console.log("undefinedValue: " + typeof undefinedToNumber); // undefinedValue: object 
// console.log("undefinedToNumber: ", undefinedToNumber); // undefinedToNumber: number
// when undefined is converted to number it will give NaN and data type will be Number 

// now i will convert boolean to number and let see the result
let booleanValue = true;
let booleanToNumber = Number(booleanValue) // 1
// console.log("booleanToNumber check: " + typeof booleanToNumber); // booleanValue: object 
// console.log("booleanToNumber: ", booleanToNumber); // booleanToNumber: number

//  ow i will convert string to number and let see the result
let stringValue = "Piyush";
let stringToNumber = Number(stringValue) // 1234
// console.log("stringToNumber check: " + typeof stringToNumber); // stringToNumber check: number
// console.log("stringToNumber: ", stringToNumber); // stringToNumber: number

// this will give NaN because string is not a number thats  why it is giving NaN

// now i will check can i connvert other datatype to boolean
let numberValue = "Piyush";
let numberToBoolean = Boolean(numberValue) // true
// console.log("numberToBoolean check: " + typeof numberToBoolean); // numberToBoolean check: boolean
// console.log("numberToBoolean: ", numberToBoolean); // numberToBoolean: boolean

/** So  short notes is :-
 *  conversuion of sting to number => number
 * conversion of Alphanumeric string to number => NaN
 * conversion of null to number => 0
 * conversion of undefined to number => NaN
 * conversion of boolean to number => 1
 * conversion of string to number => NaN
 * conversion of number to boolean => true
 * conversion of string to boolean => true
 * conversion of null to boolean => false
 * conversion of undefined to boolean => false
 * conversion of NaN to boolean => false
 */


/************************************************************* OPRATIONS  ***********************************************************************************/

// 1. Arithmetic Operations
let value = 10;
let negativeValue = -value; // -10

// console.log(negativeValue); // 10

// console.log(negativeValue + negativeValue)
// console.log(negativeValue - negativeValue)
// console.log(negativeValue * negativeValue)
// console.log(negativeValue / negativeValue)
// console.log(negativeValue % negativeValue)
// console.log(negativeValue ** negativeValue) // 100
// console.log(negativeValue ** 2) // 100
// console.log(negativeValue ** 3) // -1000
// console.log(negativeValue ** 4) // 10000

let str1 = "Hello"
let str2 = " Piyush"

let str3 = str1 + str2
// console.log(str3); // Hello Piyush    By this way we can concatenate two strings

// console.log("1" + 2) // or console,log(1+"2") // 12 both are same and returns 12 becasue 1 is string and 2 is number so it will convert number to string and concatenate 

// console.log("1" + 2 + 2) // it will return 132 but the same thing had done but preffrance is diffrance then recived 32 first 1 is string and 2 is number so it will convert number to string and concatenate then 2 is also string so it will concatenate with 32

// console.log(1 + 2 + "2")

let opration = true + ""
// console.log(true + "");
// console.log(typeof opration)

// prifix and postfix increment and decrement

let a = 10;
// console.log(a++); // 10
a++
console.log(a); // 11
console.log(++a)