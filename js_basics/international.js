const greet = language => {
  switch (language) {
    case 'en':
      console.log('Hello');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    default:
      console.log('In which language?');
      break;
  }
};

greet('en');