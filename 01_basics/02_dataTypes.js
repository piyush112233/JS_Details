"use strict";   // Use strict mode to use modern JavaScript features;

/**
 *  In js memory is allocated for the data types using two ways HEAP and STACK
 *  Heap is used for non-primitive data types and stack is used for primitive data types
 *  Heap store the non primitive data type and the reference of the heap is stored in the stack
 * stack jo hota hai vo LIFO (Last In First Out) hota hai 
 * 
 * Now for stack memmory is allocated for the primitive data types
 *  and the value is stored in the stack
 * Like Objects, Arrays, Functions, and Classes are stored in the heap
 * Heap Dynamic Memory allocation use kerta hai and stack static memory allocation use karta hai
 * 
 */
// 1. Primitive Data Types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) => fix size
// 1.1 Number
let age = 25; // Number
let height = 5.9; // Number
let weight = 70.5; // Number
let isStudent = true; // Boolean
let isEmployed = false; // Boolean
let isMarried = null; // Null
let isSingle = undefined; // Undefined
let isDivorced = Symbol('divorced'); // Symbol
let isWidowed = BigInt(12345678901234567890); // BigInt
let isAlive = 1n; // BigInt
let isDead = 0n; // BigInt
let isRich = 1.5e10; // Exponential notation
let isPoor = 1.5e-10; // Exponential notation


// Number  , String, Boolean, Null, Undefined, Symbol, BigInt

console.table([age, height, weight, isStudent, isEmployed, isMarried, isSingle, isDivorced, isWidowed, isAlive, isDead, isRich, isPoor]);

// Non-Primitive Data Types (Object, Array, Function, Class) => dynamic size  store kerta hai non-primitive data types ka reference hamesha stack m milega and npon-primitive data types heap m store hote hai
// 2. Non-Primitive Data Types
// 2.1 Object
let person = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  address: {
    city: 'New York',
    state: 'NY'
  }
};
// 2.2 Array
let fruits = ['apple', 'banana', 'orange', 'grape'];
// 2.3 Function 
function greet(name) {
  return `Hello, ${name}!`;
}
// 2.4 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}
// 2.5 Date
let currentDate = new Date();
// 2.6 RegExp
let regex = /[a-zA-Z0-9]/;
