const array = [10, 20, 30, 40];

function aging () {
  let rlSync = require('readline-sync');
  let age = rlSync.question('What is your age?\n');
  age = parseInt(age)
  console.log(`You are ${age} years old.`)
  for (let i = 0; i < array.length; i++) {
    console.log(`In ${array[i]} years, you will be ${age + array[i]} years old.`)
  }
};

aging();