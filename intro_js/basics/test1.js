  const digits = num => {
  return num
    .toString()
    .split("")
    .map(Number)
}

console.log(digits(4396));