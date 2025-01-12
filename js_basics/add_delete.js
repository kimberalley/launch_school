let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

const cleanEnergy = (array, word) => {
  let index = array.findIndex(element => {
    return element === word
  });

  array.splice(array[index], 1);
  array.push('geothermal');
  console.log(array);
}

cleanEnergy(energy, 'fossil');
console.log(energy);