let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function travel(location, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === location) {
      return true;
    }
  } return false;
}

console.log(travel('Aruba', destinations));