let scores = [96, 47, 113, 89, 100, 102];

const hundredPlus = array => {
  let newArray = array.filter(element => {
    return element >= 100
  })
  console.log(newArray.length);
}

hundredPlus(scores);