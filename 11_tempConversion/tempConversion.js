function roundToDecimal(num, decimalPlaces) {
      const factor = 10 ** decimalPlaces;
      return Math.round(num * factor) / factor;
    }

const convertToCelsius = function(temp) {
  temp = (temp -32)/(9/5)
  return roundToDecimal(temp,1);
};

const convertToFahrenheit = function(temp) {
   temp = (temp * (9/5)) + 32;
   return roundToDecimal(temp,1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
