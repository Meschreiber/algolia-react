const fs = require('fs');
const csv = require('csvtojson');

const originalArray = require('./restaurants_list.json');

// read csv and convert to json object
csv({delimiter: ';'})
.fromFile('restaurants_info.csv')
.on('end_parsed', (objectArray) => {
  // combine with original array
  let merged = objectArray.map((obj, i) => Object.assign({}, obj, originalArray[i]))

  // write a new file with combined data
  fs.writeFile('output.json', JSON.stringify(merged), (err) => {
    if (err) return console.log(err);
    console.log('finished converting file');
    // manually add to algolia index, or...
    // TODO: add/update algolia index via api
  });
})
