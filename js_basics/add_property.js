let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

function add(object) {
  return object['age'] = 40, object['favorite food'
    
  ] = 'spaghetti';
}

add(fido);
console.log(fido);