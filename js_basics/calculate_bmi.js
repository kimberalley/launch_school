const bmi = (weight, height) => {
  return (weight / (height / 100)**2).toString();
}

console.log(typeof bmi(45, 170));

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(typeof financial(123.456));
// Expected output: "123.46"