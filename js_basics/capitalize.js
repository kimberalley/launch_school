let lowerString = 'launch school tech & talk';

function capitalize(string) {
  let stringArray = string.split(' ');
  let upperString = stringArray.map((element) => {
    return element[0].toUpperCase() + element.slice(1);
  });
  console.log(upperString.join(' '));
}

capitalize(lowerString);