const { nextISSTimesForMyLocation } = require('./iss_promised.js');
const printPassTimes = require('./index.js')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });