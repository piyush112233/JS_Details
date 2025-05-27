
function greeting() {
  console.log("Hello Mr. Piyush")
}

// greeting();

/// function for adding two numbers :-

async function addTwoNumbers(number1, number2) {
  console.log(number1 + number2)
  return (number1 + number2)
}

// let reasult = addTwoNumbers(10, 54)
// console.log("result:", reasult)

function loginUserMessage(...username) {
  // return `${typeof username} Just Logged in`
  return username
}

let loginMessage = loginUserMessage(100, 200, 400, 89100, 452160);

// console.log(loginMessage)

const calculateCartPrice = function (num1, num2, ...nums) {
  return num1
}

let priceResponse = calculateCartPrice(100, 200, 400, 500, 600, 8000, 97852)

// console.log(priceResponse)

// send object in function 

function productDetails(anyObject) {
  // console.log(anyObject)
  return `The ${anyObject.productName} Cost is ${anyObject.price}`
}
const product = {
  productName: "Multi Color Dimond",
  price: 499
}

let productResponse = productDetails(product)

// console.log(productResponse)