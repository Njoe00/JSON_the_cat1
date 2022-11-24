const request = require("request");
const argvs = process.argv[2];
const argvs1 = argvs.slice(0, 3);
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";



request(URL + argvs1, (err, response, body) => {
  const data = JSON.parse(body);
  if (err) {
    return console.log("err", err);
  }
  if (data.length <= 0) {
    return console.log("This animal does not exist");
  }
  for (let key in data) {
    return console.log(data[key].description);
  }
});