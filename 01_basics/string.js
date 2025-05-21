let name = "Piyush Belwal";

// console.log(name[5])

let gameName = new String("Counter Strick");

// console.log(gameName.length)
let newGameName = gameName.toUpperCase()
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("C"))
// console.log(gameName.lastIndexOf("k"))

// for removeing space use trim() Mehtod  remove the staring and end space in JS 

let newString = "Hey Piyush Belwal  Are You Fine   "

// console.log(newString.trim())

// use of replace in js  => It remove the value with the provided values 

console.log(newString.replace("Fine", "Good").toLocaleUpperCase())

let arrayString = newString.split(" ")
console.log(newString.split(" ", 7));  // => use the value from which need to split and the second parmater is limit which difine that the postion of split shoild work 

// console.log(arrayString.length())

/** 
 *  we have diffrent method avilable for the string in diffrent ways can see them in there prototype and also can see in web console
 * 
 * Method with String :-  Details of the method which use with strings
 * length => 📌 Description: String ka length return karta hai.
 * charAt(index)  => 📌 Description: Diye gaye index pe kaun sa character hai.
 * indexOf(substring) 📌 Description: Substring ka pehla index batata hai. Nahin mila to -1.
 *lastIndexOf(substring) => Description: Substring ka last occurrence ka index batata hai.
 *includes(substring) => Description: Check karta hai ki substring exist karta hai ya nahi. (true/false)
 * startsWith(substring) / endsWith(substring) => Description: String ka start/end check karta hai kisi substring se
 * slice(start, end)  =>  📌 Description: String ka ek part return karta hai (non-inclusive of end).
 * substring(start, end)  => 📌 Similar to slice, lekin negative index ko handle nahi karta
 * substr(start, length)  => 📌 Description: Start se lekar kitne characters return kare.
 * toLowerCase() / toUpperCase()  =>  📌 Description: String ko lowercase / uppercase mein convert karta hai.
 * trim() / trimStart() / trimEnd() => 📌 Description: Extra spaces ko remove karta hai (specially input handling mein useful).
 * replace(old, new) / replaceAll(old, new)=>  📌 Description: Substring replace karta hai.
 * split(separator) => 📌 Description: String ko array mein convert karta hai based on separator.
 * repeat(count) => 📌 Description: String ko repeat karta hai.
 * match(regex)  =>  📌 Description: Regex ka use karke matches return karta hai.
 * search(regex) => 📌 Description: Regex ka use karke index return karta hai.
 * padStart(length, char) / padEnd(length, char)  =>  📌 Description: String ko kisi length tak pad karta hai.
 */

