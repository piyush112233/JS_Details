let score = 1111;
// console.log(score);

let blance = new Number(100)

// console.log(blance)

// console.log(blance.toString().charAt(2))
// console.log(blance.toFixed(4))  // => this method return the fix value of 0 after using decimal at the end of the number

const otherNumber = 1452.842
// console.log(otherNumber.toPrecision(6))  // use hota hai taki pta lagaya ja sake ki kin values per focouse kerna hai 

const hundreads = 100000000;
// console.log(hundreads.toLocaleString('en-IN')) // this method use to change the currency format to the number 10.00.10000.00

/***********************************************************************MATHS ******************************************************************************** */

// console.log(Math);  // Mgths showing that it is an object 
// console.log(Math.abs(-8)) // it return the ABSALUTE value always in positive 
// console.log(Math.round(42.952));  //  It return the rounded value from the points
// console.log(Math.ceil(4.5)); // when use ceil method always returen the rounded number but the big number from the present number
// console.log(Math.floor(5.9)); //it always return the value in rounded format but always select the small value frim the current number 
// console.log(Math.pow(4, 2))  // this denotes the power value of the number get two argumnet 1st is for the number and second for the power
// console.log(Math.min(4, 2, 1, 5, 8, 9, 1)) // always return the minimum value from the array or number
// console.log(Math.max(1, 5, 7, 9, 5, 4, 3, 16))  // it always return the max value from numbers or array;
// console.log(Math.random()) // Ye functuon hamesha random value retuern kerta hai or hamesha 0 or 1 k bich m hi value deta hai 
// console.log(((Math.random() * 10) + 1));

// the formull types like this :- 
let max = 20;
let min = 10;

console.log(Math.floor(Math.random() * (max - min + 1) + min));