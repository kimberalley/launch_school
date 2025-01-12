const forecast = weather => {
  if (weather === 'sunny') {
    console.log('It\'s a beautiful day!');
  } else if (weather === 'rainy') {
    console.log('Grab your umbrella.')
  } else {
    console.log('Let\'s stay inside.');
  }
}

forecast('test')

const forecast = weather => {
  switch (weather)
}