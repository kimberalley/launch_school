function extractRegion(locale) {
  let langReg = locale.split('_')[1]
  let region = langReg.split('.')[0]
  console.log(region);
}

extractRegion('en_US.UTF-8');