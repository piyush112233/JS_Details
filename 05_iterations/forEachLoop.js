let language = ["js", "rubby", "java", "python", "cpp"];

language.forEach((item) => {
  // console.log(`foreach ${item}`)
})

// forEach loop mai function bhi pass kiye ja sakte hai jaise

function printMe(item) {
  // console.log(`There is the value of ${item}`)
}

// language.forEach(printMe)

// foreach loop k pass  array ki value index and pura array ka access bhi hota hai

language.forEach((item, index, arr) => {
  // console.log(item, index, arr)
})

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

satates.forEach((item, index, arr) => {
  console.log(`The short Name of ${item.code}, and the full name is ${item.name}`)
})