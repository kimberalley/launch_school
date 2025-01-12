function catAge(age) {
  if (age === 1) {
    return 15;
  } else if (age === 2) {
    return 15 + 9;
  } else if (age > 2) {
    return 15 + 9 + ((age -2) * 4);
  }
};

console.log(`${catAge(1)} years old.`);