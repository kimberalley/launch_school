const intervals = num => {
  if (num < 0) {
    console.log(`${num} is less than 0.`);
  } else if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50.`);
  } else if (num > 50 && num <= 100) {
    console.log(`{num} is between 50 and 100.`);
  } else {
    console.log(`${num} is greater than 100.`);
  }
};

intervals(-45);