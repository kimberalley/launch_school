const multiply = () => {
  let rlSync = require('readline-sync');
  let firstNumber = rlSync.question('Enter the first number?\n');
  let secondNumber = rlSync.question('Enter the second number?\n');
  console.log(firstNumber * secondNumber)
};

multiply();