const factorialValue = require("../factorial/index");
const ratioValue = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioValue(num1, num2);
  const factorial = factorialValue(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
console.log(ratioAndFactorial);
