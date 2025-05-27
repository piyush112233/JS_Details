let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Filter On Arrays 
const number = numbers.filter((items) => {
  return items > 4
})

// console.log(number)
// console.log(typeof number)

//Now doing the same with foreach loop foreach loop hota hai vo koi value retrun nahi kerta hai ye sirf us per koi opration kerna ho to use aata hai Ager is se nayaa array chiye to kudh se bana padega jaise niche kiya hai

// let newNums = []
// let numberCheck = numbers.forEach((nums, keys) => {
//   if (nums > 4) {
//     newNums.push(nums)
//   }
// })

// console.log(newNums)


/// use the filter method for some other identifications

const satates = [
  {
    "code": "AR",
    "name": "Arunachal Pradesh"
  },
  {
    "code": "AS",
    "name": "Assam"
  },
  {
    "code": "BR",
    "name": "Bihar"
  },
  {
    "code": "CG",
    "name": "Chandigarh"
  },
  {
    "code": "CH",
    "name": "Chhattisgarh"
  },
  {
    "code": "DH",
    "name": "Dadra and Nagar Haveli"
  },
  {
    "code": "DD",
    "name": "Daman and Diu"
  },
  {
    "code": "DL",
    "name": "Delhi"
  }
]

let filterStatesData = satates.filter((names, index) => {
  // console.log(names[code])
  let stateData = names.code;
  // console.log(stateData);
  let sameLetter = stateData.charAt(0);
  if (sameLetter == "D" || sameLetter == "A") {
    return names.name
  }
  // console.log(sameLetter)
})

// console.log(filterStatesData)

// now trying to add the 10 in all arrays numbers

// jab bhi chaning kerte hai to jo phle loop se answer aayega vo dusre loop mai pass ho jayega fir us pe jo bhi action hoga vo age pass hoga jab tak value return na ho jaye example niche diya hua hai
let addNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sums = addNums
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums > 50)
// console.log(sums)

//  Now using reduce method in js  reduce ka use ker k array ka sum kiya ja sakta hai sabhi values ka

const reduceNums = [1, 2, 3, 4, 5];
let initialValue = 0
const reduceTotal = reduceNums.reduce((acc, currentvalue) => {
  // console.log(`value of acc is ${acc} and value of current is ${currentvalue}`)
  return acc + currentvalue
}, initialValue)

// console.log(reduceTotal);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 3999
  },
  {
    itemName: "PHP",
    price: "1999"
  },
  {
    itemName: "PY-Course",
    price: "2499"
  }, {
    itemName: "Java-Course",
    price: "2999"
  }, {
    itemName: "Ruby-Course",
    price: "6999"
  }, {
    itemName: "React-Course",
    price: "9999"
  }
]
// now need to add the price of the all course 

const payAmount = shoppingCart.reduce((accU, item) => {
  // console.log(acc)
  item = Number(item.price)
  // console.log(accU + item)
  return accU + item
}, initialValue)

console.log(payAmount);