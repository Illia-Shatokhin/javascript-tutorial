"use strict";

function checkForSpam(message) {
  let result;
  // Change code below this line
  switch (message.toLowerCase()) {
    case message.includes('spam') : result = true;
      break;
    case message.includes('sale') : result = true;
      break;
    default : result = true;
  }
  // Change code above this line
  return console.log(result) ;
}

checkForSpam('Get best sale offers now!')