let score = 9856;

let scoreString = "22151abc"
console.log("Score: " + typeof score); // Score: 9856

scoreString = Number(scoreString) // 22151

/**
 * Ager string ko number me convert kar rehe hai or string mai alpha numeric value hai to Data type number to aa jayega lekin value number me convert nahi ho payegi or NAN value milega or NAN ka type number hota hai 
 */
console.log("scoreString", scoreString) // scoreString NAN

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
console.log("numberToBoolean check: " + typeof numberToBoolean); // numberToBoolean check: boolean
console.log("numberToBoolean: ", numberToBoolean); // numberToBoolean: boolean

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