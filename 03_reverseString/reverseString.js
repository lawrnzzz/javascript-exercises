// split and store each character on the string into an array
// reverse the array
// convert array back to a string by joining them

const reverseString = function (string) {
  let charArr = string.split("");

  return charArr.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
