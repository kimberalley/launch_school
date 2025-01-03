const caps = (string) => {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
};

caps('Elephant Ears');