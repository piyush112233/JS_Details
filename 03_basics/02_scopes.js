
if (true) {
  // var oneD = "210"
  let twoD = "320"
  const ThreeD = "450"
}

// console.log(oneD);
// console.log(twoD);
// console.log(ThreeD)

/**
 * var se ban ne vale variable hamesha globelly define hote hai 
 * let or const se banne vale variable hamesha block scope mai hi define hote hai 
 */

/** *******************************************************Scope level and mini hoisting in javascript |***************************************************** */

function one() {
  const username = "Piyush";

  function two() {
    const channelName = " Youtube"
    // console.log(username + channelName)
  }
  // console.log(channelName)
  two()
}
one()


/************************************************ Fucnction scop and declaration methods ****************************************************************** */

genrateKey()
function genrateKey() {
  console.log("Hello Piyush")
}

const genrateKey2 = function () {
  console.log("Hello Piyush Belwal")
}
genrateKey2()  //Mean that ye fucntion ek const mai bna hai to ye globally define nahi hai to isko function define se phle call nahi ker sakte vahi uper vala function direct bna hai to ye globally stor hua hai to isko call ker pa rehe hai 