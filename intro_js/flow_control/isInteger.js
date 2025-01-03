const evenOrOdd = num => {
  if (Number.isInteger(num) && num % 2 === 0) {
    console.log('Even')
  } else {
    console.log('Odd')
  }
};

evenOrOdd(23);