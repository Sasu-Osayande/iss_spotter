// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

const { nextISSTimesForMyLocation } = require("./iss");


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});
  // fetchMyIP((error, ip) => {
  //   if (error) {
  //     console.log("It didn't work!", error);
  //     return;
  //   }
  //   fetchCoordsByIP("108.162.164.188", (error, coords) => {
  //     if (error) {
  //       console.log("It didn't work!", error);
  //       return;
  //     }
  //     fetchISSFlyOverTimes(coordinates, (error, flyoverTimes) => {
  //       if (error) {
  //         console.log("It didn't work!", error);
  //         return;
  //       }
  //       // success, print out the deets!
  //       console.log("It worked! Returned IP:", ip);
  //       console.log("It worked! Returned coordinates:", coords);
  //       console.log("It worked! Returned flyover times:", flyoverTimes);
//     });
//   });
// });

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("108.162.164.188", (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coords);
// });

// const coordinates = { latitude: '43.6445', longitude: '-79.7755' };

// fetchISSFlyOverTimes(coordinates, (error, flyoverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned flyover times:", flyoverTimes);
// });

module.exports = { printPassTimes };