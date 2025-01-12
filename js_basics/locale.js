const extractLanguage = locale => {
  let language = locale.split('_')[0]
  console.log(language)
};

extractLanguage('en_US.UTF-8');``