
/**    ****************************** For Loop *************************************** */
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element)
// }

// For loop inside forloop

// for (let i = 1; i < 10; i++) {
//   const element = i;
//   console.log(`Inner Loop call: ${i}`)
//   for (let j = 1; j <= 10; j++) {
//     const element = j;
//     console.log(`Outer Loop call: ${i * j}`);
//   }
// }

// continue and break statement in loop 

// for (let i = 1; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log(`Number ${element} Deduct`)
//     break
//   }
//   console.log(`Loop call: ${i}`)
// }

for (let i = 1; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log(`Number ${element} Deduct`)
    continue
  }
  console.log(`Loop call: ${i}`)
}