const request = require("request");
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (err, response, body) => {
    if (err) {
      return callback(`Error ${err}`, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(null, data[0].description);
    } else {
      console.log(data[0]);
      return callback(null, "This breed does not exist");
    }

  });
};

module.exports = { fetchBreedDescription };

