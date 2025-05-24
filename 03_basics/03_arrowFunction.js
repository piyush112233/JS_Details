
const user = {
  username: "Piyush",
  price: 999,

  welcomeMessage: function () {
    console.log(`Hello ${this.username} , Welcome In the website`)
    console.log(this)
  },
  askQuestion: () => {
    console.log(`How are you ${this.username}`)
    console.log(this)  // // this → comes from surrounding SCOPE, not from object
  }
}

// user.welcomeMessage();
// user.askQuestion();


/**
 * Normal function m this define hone se phle matlb global scope banne se phle define hota hai ki function call kaha se hua hai to welcome message is liye diya hai kuki yha per fucntion user.welcomeMessage k sath call hua hai to uske liye this user hoga na ki global 
 * vahi per ager bat keru user.askQuestion ki ye hamesha hi lexical scope leta hai chahe kaise bhi call ho to isme mujhe value undfine mili ya {} mili leikn 
 * normal function m reffrence mujhe obj ka mil geya call hone k tarike k karan
 * 
 */
// user.username = "Nikhil"
// user.welcomeMessage();
// console.log(this)  // return  null object kuki iska koi scope nahi h abhi

function chai() {
  let username = "Piyush"
  // console.log(this) // we can use this valiable in function 
  // console.log(username) /// username function ke property nahi hai, wo sirf function ke scope me variable hai.
  // console.log(chai.username);  // undefined, kyunki koi property hi nahi
}

// chai()

// arrow function in js  

const chai2 = () => {
  // let username = 
  // console.log(this)
}

// chai2()

// This is a basic arrow function 
const addNumbers = (num1, num2) => {
  return num1 + num2
}


// console.log(addNumbers(5, 6))

// implicit return function => arrow function ko dusre tarh se bhi use kerte hai usko hi implecit retun function bolte hai isko ek hi line m run ker dete hais

// const addNumbersimpli = (num1, num2) => (num1)
const addNumbersimpli = (num1, num2) => (num1 + num2);



// console.log(addNumbersimpli(5, 6))





/** Ab samjh bhai 
 * 
 * Node js m 3 scop hote hai 1st module.export vala jis m ager this ki bat kere to vo blank hota hai  
 * console.log(this); // 👉 Output: {} (Empty object - module ka `this`)
 * 
 * 
 * 2nd global scope jo ki run time m banta hai or ye same window object type banta hai (reffer kerta hai=> Timers, Process, etc.)
 * console.log(global); // 👉 Prints the entire global object (Timers, Process, etc.)
 * 
 * 3rd is Function Scope ye depend kerta hai function per ki function kis ne call kiya hai jasie example m samjhna ab 
 * function chai() {
    console.log(this);
  }
  chai()
 
  abhi is case m function jo hai glabally call hua hai to jo scope lega ye runtime per vo global scope le lega jaise ye leta hai 
  ➡️ Kyunki function global context se call hua.  ha ager yehi kam strict mode m kerunga to undifind aayega kuki fir vo global object access nahi kerga
  * console.log(global); // 👉 Prints the entire global object (Timers, Process, etc.)
 
  Ab arrow function k liye samjh kaise kam kerta hai ye :- 
 
  const chai = () => {
    console.log(this);
  };
  chai();
 
  ye function hai isme this = {} (Empty object, kyunki arrow function ka this bind hota hai lexical scope se) mtlab aisa hai ki ye bind jab hota hai run time per ye laxical scope mtlb modeule vala scope se bind hota hai na ki global se to yehi karan hai ki mai noraml function k globally bind hone k karan this get ker pata hu lekin arrow function m lexical bind hone k karan mujhe blank object milta hai 
 
  to yahi karan hai mujhe uper chai function m this mila or chai2 function m this blank obejct or laxical scope ka obejct {} aa geya 
 
  🔁 Rule You Must Remember:
  🔥 Arrow functions do not get their own this.
  ❗ They inherit this from their parent lexical scope.
 
  | Context                           | `this` kya hoga           |
  | --------------------------------- | ------------------------- |
  | Top level (`console.log(this)`)   | `{}` (module scope)       |
  | `function` outside strict mode    | `global`                  |
  | `function` inside strict mode     | `undefined`               |
  | `arrow function` (anywhere)       | lexical scope ka `this`   |
  | Inside object method (`obj.fn()`) | `obj`                     |
  | Arrow inside object method        | lexical parent (`module`) |
 
 
 */

/**  Immediately Invoked Function Expressions (IIFE) */

(function chaiBiskit() {
  console.log(`Hey Piyush let's take chai with biskit`);
})();

/** Ye function auto invoke hota hai and  Local scope banta hai, pollution nahi hoti 
 *  IIFE ka use ku kerte hai => 
 * Global scope ko pollute hone se bachane ke liye
    Temporary variables banane ke liye
    Module pattern banane ke liye
    async/await use karne ke liye top-level function me
 * 
*/

// IIFE function with the arrow function 
((name) => {
  console.log(`Hii ${name} lets learn IIFE in JS`);
})("Piyush");