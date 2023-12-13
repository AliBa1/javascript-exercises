const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(nums) {
  let ans = 1;
  nums.forEach(num => {
    ans *= num;
  });
  return ans;
};

const power = function(a, b) {
  let ans = 1;
  for (let i=0; i<b; i++) {
    ans *= a;
  }
  return ans;
};

const factorial = function(a) {
	let ans = 1;
  for (let i=0; i<a; i++) {
    ans *= i+1;
  }
  return ans;
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
