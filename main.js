"use strict";

function includes(array, value) {
  // Change code below this line
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return console.log(true);
    }
  }
  return console.log(false);
  // Change code above this line
}


includes([1, 2, 3, 4, 5], 6);