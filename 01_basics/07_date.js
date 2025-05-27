let date = new Date();

// console.log(date) // 2025-05-20T15:56:43.350Z

// console.log(date.toString());  // Tue May 20 2025 21:26:43 GMT+0530 (India Standard Time)

// console.log(date.toISOString()); // 2025-05-20T15:56:43.350Z

// console.log(date.toJSON()) // 2025-05-20T15:56:43.350Z

// console.log(date.toLocaleString()) //5/20/2025, 9:26:43 PM

// let createDate = new Date(2025, 4, 20)

let createDate = new Date("1-14-2025")

// console.log(createDate.toLocaleString())

let timeStamp = Date.now();

// console.log(timeStamp) // ye mili second m value return kerta hai ager is se second m jana aho to 1000 se divid ker dete hai 

// console.log(Math.round(timeStamp / 1000))

let newDate = new Date();

// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());

newDate.toLocaleString('Default', {
  weekday: "short"
})


// const today = Temporal.Now.plainDateISO();  ==> ye abhi aaya nahi hai ecma script mai isko lane ka provision chal reha hai abhi

// console.log(today.toString());  // e.g. 2025-05-21
