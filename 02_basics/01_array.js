// Array

let myArr = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(myArr[0]);

let superHeros = ["Nag Datya", "Bheem", "Herry Porter"]

// console.log(superHeros[0])
let myArr2 = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr2)

// Array`s methods

// myArr.push(7)  // ye last index m jo value dali h usko add ker deta hai main array mai hi directly
// myArr.push(0)

// myArr.pop() //  => Isko jab bhi use kerte  hai to hamesha last index ki value remove ker deta hai array se 


// myArr.unshift(7); // => Ye hamesha array k starting index per value add ker deta hai unshift method array mai vo value add kerta hai jo pass ki geyi hai 
// myArr.shift(); // => Ye jo first ndex per value hai usko remove ker deta hai 

// console.log(myArr.includes(9));  // => Check that the pass number is avilable in array or not

// console.log(myArr.indexOf(3))  // => Tell the index pf the value avilable in the array if pass wronge value to check index then it return -1

let newOneArray = myArr.join();  // convert the new array in the string and privious array remain same

// console.log(newOneArray)

// Array splice and slice
// console.log(myArr)

// let methodSlice = myArr.slice(1, 3) // require that arguiments which need to slice the array get the value of first value but not get the fir last one 
// console.log(methodSlice)
// console.log("A", myArr)
let methodSlice = myArr.slice(2, 4) // argument1st => get the array from index of argument and get the last value from the argument second matlb array  se start kero get kerna from argument1 and last lo argument 2nd tak or sath m purana array vaise hi rehne do
// console.log(methodSlice)
// console.log("B", myArr)

let methodSplice = myArr.splice(8, '', 9) // argment1 = remove the value from this index of array  // argument2 => remove how many values from that index  and argment3 => means that add this value at index of argumnet 1st mtlb value hta do index (argument 1st se) or argument 2nd jo diya hai utni values hta do or ager argument 3rd bhi hai to usko add ker do argument 1st ki index per 4th 5th ....nth index value add keri ja sakti hai

// console.log(methodSplice)

// console.log("c", myArr)

let marvalHeros = ["Iron Man", "Thor", "Hulk", "Dr. Strange"];
let dcHeros = ["Super Man", "Bat Man", "Flash"]

// marvalHeros.push(dcHeros);

// console.log("marvalHeros", marvalHeros)
// console.log("dcHeros", dcHeros)

let concateArr = marvalHeros.concat(dcHeros);
// console.log(concateArr)  => method retuin the new array and add the both array in this one array one more way to do same thing Spread Mehtod

let allNewHeros = [...marvalHeros, ...dcHeros] // this is the spred method which spred all the element of the array Spread method jayda better hai concate se kuki isme or jayda array ho to ek bar m sare element ek array m aa jate hai

// console.log("allNewHeros", allNewHeros)

let newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // ager aise array mil jaye to isko simple ek array m badle k liye ek method hai array.flat() jis se pure element ek hi array m aa jate hai or ye ek naya array return kerta hai purana array same rehta hai 

let anotherArray = newArray.flat(Infinity)
// console.log("anotherArray", anotherArray);
// console.log("newArray", newArray)

// this function is use to verify that provided value is in array or not
// console.log(Array.isArray("Piyush"))

// this function is use to create an array by using any data type you can pass

//Array.from()  method 

// console.log(Array.from({ 0: "Piyush", length: 1 }));

// Syntext => Array.from(arrayLike, mapFn?, thisArg?)
/**
 * Arraylike  = > obj or itrable or string which need to change in array
 *
 * arrayLike: koi array-like ya iterable object
 * mapFn: (optional) har element pe transform lagana ho to
 * thisArg: mapFn ke this context ke liye
 */
// string to array 

// console.log(Array.from("PIYUSH")) // jab string ko change kerte hai or kuki iske pass length property hoti hai to isme noramlly ye copnvert ho jata hai

console.log(Array.from({ 0: "Piyush", 1: "Devloper", 2: "Node JS", 3: "Latest", length: 4 })) // so ager mujhe Obejct ko array.from m pass kereke array chiye to do case chiye mujhe 
/**
 * 1. obejct m length property pass kerni padegi kuki aray length ka use ker k hi banega or dusara jo keys hongi array ki vo number m hi honi chiye or fomated honi chiye 
 * 
 */

console.log(Array.from([1, 2, 3, 4, 5], (keys) => keys * 4))  // ye is method  m function  ko bhi pass ker sakte hai as a argument  ye fix mathod hai iska 

/**   **********************************************NOTE **************************************************************** 
 *  🔴 1. Mutating Methods — Jo array ko tod-phod dete hain  ==> Array m changes ker dete hai voi methods
    🎯 Trick yaad rakhne ke liye:
    “PS3 SURF”
    Jaise PlayStation 3 pe SURF karta hai aur array ko todta hai 😄

    Letter	Method	Kaam kya karta hai
    P	push()	End me item jodta hai
    S	shift()	Start se item hataata hai
    3	splice()	Kahi se bhi item hata/same jagah jod sakta
    S	sort()	Array ko sort karta hai (original change hota hai)
    U	unshift()	Start me item jodta hai
    R	reverse()	Array ko ulta kar deta hai
    F	pop()	End se item hataata hai

    👉 "PS3 SURF" = Array ka asli tod-phod gang

    | Letter | Method      | Kaam kya karta hai                                 |
    | ------ | ----------- | -------------------------------------------------- |
    | **P**  | `push()`    | End me item jodta hai                              |
    | **S**  | `shift()`   | Start se item hataata hai                          |
    | **3**  | `splice()`  | Kahi se bhi item hata/same jagah jod sakta         |
    | **S**  | `sort()`    | Array ko sort karta hai (original change hota hai) |
    | **U**  | `unshift()` | Start me item jodta hai                            |
    | **R**  | `reverse()` | Array ko ulta kar deta hai                         |
    | **F**  | `pop()`     | End se item hataata hai                            |



 *🎯 Trick yaad rakhne ke liye:
    “JSS CRMF”
    Yaad kar: "Join Slice Some – CRMF"
    Jaise koi CRM dashboard pe data show ho raha ho (safe read-only)

    Letter	Method	Kaam kya karta hai
    J	join()	String banaata hai
    S	slice()	Naya array ka tukda deta hai
    S	some()	Check karta hai, kuch element condition match karta hai ya nahi
    C	concat()	2 ya zyada arrays jodta hai, bina tod-phod
    R	reduce()	Ek hi value me reduce karta hai
    M	map()	Naya array banaata hai
    F	filter()	Filter karke naya array deta hai

    👉 "JSS CRMF" = Smart log jo array ka data sirf dekhte hain, badalte nahi
    | Letter | Method     | Kaam kya karta hai                                              |
    | ------ | ---------- | --------------------------------------------------------------- |
    | **J**  | `join()`   | String banaata hai                                              |
    | **S**  | `slice()`  | Naya array ka tukda deta hai                                    |
    | **S**  | `some()`   | Check karta hai, kuch element condition match karta hai ya nahi |
    | **C**  | `concat()` | 2 ya zyada arrays jodta hai, bina tod-phod                      |
    | **R**  | `reduce()` | Ek hi value me reduce karta hai                                 |
    | **M**  | `map()`    | Naya array banaata hai                                          |
    | **F**  | `filter()` | Filter karke naya array deta hai                                |

 *
 *  
 * 
 **/
