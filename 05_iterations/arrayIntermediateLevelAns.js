/* ***************************Find the second largest element in an array // const arr5 = [10, 40, 30, 20, 40]; ******************************************* */

const secondLargestNum = [10, 40, 400, 30, 20, 40];

// lets get the largest number first or second largest number nikalne k liye hamesha for of ka use kero easy and simple approch hai 
let firstNumber = -Infinity;
let secondNumnber = -Infinity;
for (let number of secondLargestNum) {
  if (number > firstNumber) {
    firstNumber = number
  } else if (number > secondNumnber && number !== firstNumber) {
    secondNumnber = number
  }
}

// console.log(`First Largest number is ${firstNumber} and Second Largest number is ${secondNumnber}`)
// console.log(secondNumnber)

/**  **************************************** Move all zeroes to the end of the array /// const arr6 = [0, 1, 0, 3, 12]; ************************************* */

const moveZerostoEnd = [0, 1, 0, 3, 12];
let i = 0;
for (let index = 0; index < moveZerostoEnd.length; index++) {
  // const element = array[index];
  if (moveZerostoEnd[index] !== 0) {
    // let number = moveZerostoEnd[index]
    [moveZerostoEnd[i], moveZerostoEnd[index]] = [moveZerostoEnd[index], moveZerostoEnd[i]]
    i++
  }

}
console.log(moveZerostoEnd);


/** ************************************************** Rotate array by k elements (with wrap-around) **********************************************************/

const rotateArr = [1, 2, 3, 4, 5];
const k = 2;

