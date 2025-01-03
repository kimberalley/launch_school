const factorial = num => {
  let result = 1;
  for (let counter = num; counter > 0; counter -=1) {
    result *= counter;
  }
  console.log(result);
};


factorial(3);