const { fetchBreedDescription } = require('./breedFetcher');
const argvs = process.argv[2];
const breedName = argvs;


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Error fetch details:`, error);
  } else {
    console.log(desc);
  }
});