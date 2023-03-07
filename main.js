"use strict";

function getCommonElements(array1, array2) {
  // Change code below this line
  const arrayCommonElements = [];
  for (let i = 0; i < array1.length; i++) {
    for (let index = 0; index < array2.length; index++) {
      if (array1[i] === array2[index]) {
        arrayCommonElements.push(array1[i]);
      }
    }
  }
  console.log(arrayCommonElements);

 // Change code above this line
}

getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])