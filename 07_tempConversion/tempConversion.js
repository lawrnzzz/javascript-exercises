const convertToCelsius = function (temp) {
  const convertedTemp = (temp - 32) * 0.5556;

  // convert back to float since toFixed() returns string
  return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const convertedTemp = temp * 1.8 + 32;

  return parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
