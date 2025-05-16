const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => (total + current), 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => (total * current));
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return result = 1;
  }
  else {
    let result = 1;
      for (i = 1; i <= num; i++) {
        result *= i;
      }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
