const convertToCelsius = function(temp) {
  let celsuisTemp = (5/9) * (temp-32);
  if (celsuisTemp % 1 == 0) {
    return celsuisTemp;
  } else {
    return Number(celsuisTemp.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let fahrTemp = (9/5 * temp)+32;
  if (fahrTemp % 1 == 0) {
    return fahrTemp;
  } else {
    return Number(fahrTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
