// Find the maximum/minimum element in an array //const arr1 = [5, 3, 8, 1, 4, 7];

// iske liye spred oprator use ker sakte hai sath hi reduce method use ker sakte hai kuki usme value mil jayegi proper

const maxMinEle = [5, 3, 8, 1, 4, 7];
// Note :- Ager reduce mai initialValue define na ki jaye to vo by default hi array ki 1st index ko leta hai
let minNum = maxMinEle.reduce((acc, nums, index) => {
  if (acc > nums) {
    return nums
  } else {
    return acc
  }
})

// same chig hum chote format mai bhi likh sakte hai jaise :-
let minNumber = maxMinEle.reduce((privious, next) => privious > next ? next : privious) // ye format mai read ablity kam hai bhai

// console.log(minNumber)

// Same kam hum spred oprator se bhi ker sakte hai 

let minNumberVal = Math.min(...maxMinEle)
// console.log(minNumberVal)

/** now finding the maximum number from the arr maxMinEle */

let maximumValue = maxMinEle.reduce((priviousEle, nextEle) => priviousEle > nextEle ? priviousEle : nextEle)

// console.log(maximumValue)

// For finding the max value using the spread oprator is 

let maxNumberIs = Math.max(...maxMinEle);
// console.log(maxNumberIs)

/** ******************************************* Now FIRST Answer is done and attempting the second question ************************************************** */

/**  Question 2nd => Reverse an array // const arr2 = [10, 20, 30, 40, 50] */

// ye aaray reverse ka basic way hai  fucntion bhi hota pre define for reverse an array reverseArray.reverse();
const reverseArray = [10, 20, 46, 30, 46, 40, 50];

// using the map function to reverse an array
let reverseArrVal = reverseArray.map((value, index) => {
  let newIndex = (reverseArray.length - 1) - index;
  // let arr = reverseArray[newIndex];
  return reverseArray[newIndex]
})

// console.log(reverseArrVal)
let newascArr = reverseArrVal.sort((nextNum, priviousNum) => nextNum - priviousNum)

// console.log(newascArr)
// by using fucntion revrese an array 

let reverseArrayValues = reverseArray.reverse();
// console.log(reverseArrayValues)

// now ab reverse to kerrna hai lekin accending ya decending order mai kerna hai

// console.log(reverseArray.sort((a, b) => a - b))


/**** *******************************Sum of all elements in the array // const arr1 = [5, 3, 8, 1, 4, 7]; ******************************************* */

let sumOfAllArr = [5, 3, 8, 1, 4, 7];

let sumOfValue = sumOfAllArr.reduce((privious, next) => {
  return privious + next
}, 0)

// same kam kerne k liety for of loop ka bhi use ker sakte hai
let numbers = 0;

for (const num of sumOfAllArr) {
  numbers = numbers + num;
}
// console.log(numbers)

/***  ******************************* Find the average of array elements // const arr2 = [10, 20, 30, 40, 50]; *********************************** */

let avgArr = [10, 20, 30, 40, 50];
let numberis = 0
for (const number of avgArr) {
  numberis = number + numberis;
}
// let avgNumberis = numberis / (avgArr.length);


// Same thing can be do by the map and reduce all

let avgofArrayIs = avgArr.reduce((privious, next) => privious + next) / avgArr.length

// console.log(avgofArrayIs)

//** ******************************************Count even and odd numbers in the array // const arr2 = [10, 20, 30, 40, 50]; ***************************** */

const ascDescArr = [10, 20, 30, 45, 50, 57, 965]
let oddEvennums = ascDescArr.reduce((acc, num) => {
  num % 2 == 0 ? acc.even.push(num) : acc.odds.push(num);
  return acc;
}, { even: [], odds: [] })

// console.log(oddEvennums)/

// another method to get the odd even numbers

let oddArr = [];
let evenArr = [];

for (const oddeven of ascDescArr) {
  if (oddeven % 2 == 0) {
    evenArr.push(oddeven);
  } else {
    oddArr.push(oddeven)
  }
}

// console.log("oddArr", oddArr)
// console.log("evenArr", evenArr)

/** ***************************************  const arr3 = [9, 14, 22, 5, 3]; const target = 5; ******************************************************** */

const linearSearch = [9, 14, 22, 5, 3, 5];
const target = 5;

// find method use kerte hai kisi number ko find kerne k liye
let numberFound = linearSearch.find((num) => num == target)

// console.log(numberFound);

// other method for solve this for loop ka bhi use ker sakte hai
let isNumberFound = [];
for (let index = 0; index < linearSearch.length; index++) {
  const element = linearSearch[index];
  if (element == target) {
    isNumberFound.push(element);
  }

}
// console.log(isNumberFound)

// iska use ker k kitne bhi element ho sab ko find ker sakte hai liner search ka bhi use ho jata hai


/** *********************************************Check if the array is sorted or not // const arr1 = [5, 3, 8, 1, 4, 7]; ************************************* */

// sorted array or ascending array or descending array
// const checkSortedArr = [5, 3, 8, 1, 4, 7];
const checkSortedArr = [1, 2, 3, 4, 5, 6, 77];

let sortedCheck = checkSortedArr.reduce((privious, next) => {
  return privious < next ? true : false
})

// console.log(sortedCheck)


/**  ************************************ Remove duplicates from an array // const arr4 = [1, 2, 2, 3, 4, 4, 5]; ********************************************* */

const duplicates = [1, 2, 2, 2, 3, 4, 4, 5, 5];

for (let i = 0; i < duplicates.length; i++) {
  // console.log(`I Starting index is ${i}`);
  // console.log(`I Starting number is ${duplicates[i]}`);
  for (let j = i + 1; j < duplicates.length; j++) {
    // console.log(`J Starting index is ${j}`);
    // console.log(`J Starting number is ${duplicates[j]}`);
    if (duplicates[i] === duplicates[j]) {
      // Duplicate मिला, remove कर दो
      duplicates.splice(j, 1);
      j--; // क्योंकि splice से array छोटा हो गया, index adjust करो nahi to ager 3 number same hue to array mai error aa jayegi
    }
  }
}

// console.log(duplicates); // [1, 2, 3, 4, 5]

// same kam kerne k liye ek method or hai  ✅ 1. Using Set – Best & Cleanest ye hamesha naya array deta hai purane array m change nahi kerta 

let uniqueArrayIs = [... new Set(duplicates)];

// console.log(duplicates)
// console.log(uniqueArrayIs)

/** ***************************************** Left rotate the array by one position //const arr2 = [10, 20, 30, 40, 50]; ************************************ */

// is case m mane pure array ko hi roate ker diya bhai
const leftRotateArr = [10, 20, 30, 40, 50];
let rotetedArr = [];
for (let index = leftRotateArr.length - 1; index >= 0; index--) {
  const element = leftRotateArr[index];
  rotetedArr.push(element)
}


/// ye mane uper thoda alg kam ker diya Left rotate the array by one position  ka mtlb hota hai ki left se ek number aage sarka k first number piche dal do

const leftRotateArrNew = [10, 20, 30, 40, 50];
const firstNumber = leftRotateArrNew[0];
for (let index = 0; index < leftRotateArrNew.length - 1; index++) {
  leftRotateArrNew[index] = leftRotateArrNew[index + 1]
}

leftRotateArrNew[leftRotateArrNew.length - 1] = firstNumber
// console.log(leftRotateArrNew);

// iska ek easy method bhi hai jo use ker sakte hai 

const leftRotateArrOne = [10, 20, 30, 40, 50];

leftRotateArrOne.push(leftRotateArrOne.shift())

// console.log(leftRotateArrOne)

/** ********************************** Right rotate the array by k positions // const arr2 = [10, 20, 30, 40, 50]; ******************************************* */

/**
   "Right rotate by 2 positions" ka matlab:
   Array ke last 2 elements ko uthao aur start mein daal do.
 */
const rightRoateateArr = [10, 20, 30, 40, 50];
const k = 3;
for (let index = 0; index <= k; index++) {
  const element = rightRoateateArr.pop();
  rightRoateateArr.unshift(element)
}
// console.log(rightRoateateArr)

// trying from other way same things isme mane koi function use nahi kiya hai basic se kera hai pura

const rightRoateateArrOne = [10, 20, 30, 40, 50];
const kOne = 2;
let length = rightRoateateArrOne.length - 1
// while()
for (let index = 0; index < kOne; index++) {
  [rightRoateateArrOne[index], rightRoateateArrOne[length]] = [rightRoateateArrOne[length], rightRoateateArrOne[index]]
  length--
}
// console.log(rightRoateateArrOne)

