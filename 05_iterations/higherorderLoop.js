let satates = [
  { "code": "AN", "name": "Andaman and Nicobar Islands" },
  { "code": "AP", "name": "Andhra Pradesh" },
  { "code": "AR", "name": "Arunachal Pradesh" },
  { "code": "AS", "name": "Assam" },
  { "code": "BR", "name": "Bihar" },
  { "code": "CG", "name": "Chandigarh" },
  { "code": "CH", "name": "Chhattisgarh" },
  { "code": "DH", "name": "Dadra and Nagar Haveli" },
  { "code": "DD", "name": "Daman and Diu" },
  { "code": "DL", "name": "Delhi" },
  { "code": "GA", "name": "Goa" },
  { "code": "GJ", "name": "Gujarat" },
  { "code": "HR", "name": "Haryana" },
  { "code": "HP", "name": "Himachal Pradesh" },
  { "code": "JK", "name": "Jammu and Kashmir" },
  { "code": "JH", "name": "Jharkhand" },
  { "code": "KA", "name": "Karnataka" },
  { "code": "KL", "name": "Kerala" },
  { "code": "LD", "name": "Lakshadweep" },
  { "code": "MP", "name": "Madhya Pradesh" },
  { "code": "MH", "name": "Maharashtra" },
  { "code": "MN", "name": "Manipur" },
  { "code": "ML", "name": "Meghalaya" },
  { "code": "MZ", "name": "Mizoram" },
  { "code": "NL", "name": "Nagaland" },
  { "code": "OR", "name": "Odisha" },
  { "code": "PY", "name": "Puducherry" },
  { "code": "PB", "name": "Punjab" },
  { "code": "RJ", "name": "Rajasthan" },
  { "code": "SK", "name": "Sikkim" },
  { "code": "TN", "name": "Tamil Nadu" },
  { "code": "TS", "name": "Telangana" },
  { "code": "TR", "name": "Tripura" },
  { "code": "UK", "name": "Uttarakhand" },
  { "code": "UP", "name": "Uttar Pradesh" },
  { "code": "WB", "name": "West Bengal" }
]

// for of loop m element sidha valuie print kera deta hai  jab ki for in loop m keys print pahle hoti hai

var stateName = [];
for (const element of satates) {
  // console.log(`The name of rhe state is ${element.name}`)
  stateName[element.code] = element.name;
}

// console.log(stateName)

// ye for of jo loop hai sab per chalta hai na ki sirf object per iska syntext aisa hi hai sample syntext is:- 
// for (const element of object) {

// }

// for of loop string object and arrays per bhi work kerta hai mean to say that jis per bhi .length property hai us per iska use ker sakte ho 
let numbers = [1, 2, 3, 4, 5, 6];

for (const num of numbers) {
  // console.log(num)
}

// ex :-  doing the for of ion string

let greetings = "Hey Piyush! What is going on"

for (const greetWords of greetings) {
  if (greetWords == " " || greetWords == "\n") {
    // console.log(greetWords);
    continue;
  }
  // console.log(greetWords);

}

// Map In jS

const map = new Map();

// map mai hamehsa unique value hi rehegi or sath hi order bhi fix rehta hai 


map.set('AN', "Andaman and Nicobar Islands")
map.set('UP', "Uttar Pradesh")
map.set('UK', "Uttarakhand")
map.set('RJ', "Rajasthan")

// console.log(map)

// Now adding the loop on the maop object

// so in the for of loop hum key and values alg alg get ker sakte hai key and values ki niche jaise show kiya hai 
for (const [keys, value] of map) {
  // console.log(` The vaslue of keys is :- ${keys}`);
  // console.log(`the value of the value is ${value}`);
}

// for of loop noraml tarh se obejct per work nahi kerta uske liye object.keys nikal k kam kerna padta hai lekin is m bhi sirf key kahi access hota hai na ki value ka  jaise ki niche example m show kiya geya hai n
// ye mthod object k liye usefull nahi hai js m to for in ka use kerte hai object per

let newobject = {
  "KGF": "KGF One",
  "DDLJ": "Dil Wale dhulaniya le jayenge",
  "IRON MAn": "IRON MAN"
}

for (const [names, values] of Object.keys(newobject)) {
  // console.log(names)
  // console.log(values)
}


// SO Obejct per loop lagane k liye JS mai for in loop ka use kerte hai 

let language = {
  'js': "Java Script",
  'py': "Python",
  'Rb': "Ruby",
  'cpp': "C++",

}


// ye method suggestion m aaya to use kiya ager iska basic deke to niche bta reha hu iske check ker:
for (const lang in language) {
  if (Object.prototype.hasOwnProperty.call(language, lang)) {
    const element = language[lang];
    let keys = lang
    // console.log(keys, element)
  }
}

for (const lang in language) {
  // console.log(lang, language[lang])
}

// so By using this now clear that for in is work for object know i am cheking this for array, That is it will work for array or not

// jab bhi for in loop use kerte hai to usemne vairable se direct key hi get hoti hai chahe obejct ho ya array lekin for of array se direct value get ker leta hai 

let languageArr = ["javaScript", "Python", "C++", "Ruby"]

for (const keys in languageArr) {
  // console.log(languageArr[keys])
}

// now forin loop will try with for map

const mapOne = new Map();
// console.log(typeof mapOne)
// map mai hamehsa unique value hi rehegi or sath hi order bhi fix rehta hai 
mapOne.set('AN', "Andaman and Nicobar Islands")
mapOne.set('UP', "Uttar Pradesh")
mapOne.set('UK', "Uttarakhand")
mapOne.set('RJ', "Rajasthan")

// console.log(mapOne)

// map ittrable nahi hote hai to is per for in nahi work kerta hai 

/**
 * for...in sirf object properties ke liye use hota hai.

  Map ek special object hai, lekin normal object jaisa nahi hota.

  Isliye for...in se Map ke keys nahi milti. 
 * 
 */

for (const key in mapOne) {
  // console.log(key)
}

let bucket1 = [9, 9, 9, 9, 9, 9, 9];
let bucket2 = [9, 9, 9, 9];

let sumArray = [];
let tenceNumber = null;
// let onceNumber;

for (let index = 0; index < bucket1.length; index++) {
  let sum = null
  for (let jindex = index; jindex < bucket2.length; jindex++) {
    sum = bucket2[jindex] + bucket1[index];
    console.log(`inner array value is ${bucket2[jindex]} and outer array value is ${bucket1[index]}`)
    if (sum > 9) {
      tenceNumber = Math.floor((sum % 100) / 10);
      sumArray.push(sum % 10)
    } else {
      tenceNumber = null;

    }
    break
  }
  sumArray.push(tenceNumber + sum);
}
console.log(sumArray)

