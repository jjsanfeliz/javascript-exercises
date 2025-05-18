const add = function(n1,n2) {
	return n1+n2
};
const subtract = function(n1,n2) {
	return n1-n2
};
const sum = function(arr) {
  let res = 0;
	for (num of arr) {
    res = res + num;
  }
  if (res === undefined)
  {
    return 0
  }
  return res;
};

const multiply = function(arr) {
  let res = 1;
	for (num of arr) {
    res = res * num;
  }
  if (res === undefined)
  {
    return 0
  }
  return res;
};

const power = function(n1,n2) {
	return n1 ** n2;
};

const factorial = function(n) {
  res = 1;
	for (let index = n; index > 0; index--) {
    res = res * index;
  }
  return res;
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
