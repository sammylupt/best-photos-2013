/* Scott Luptowski

Script which runs the parser on the source array 

Requires source-array and app, which respectively make global sourcePhotoArray and App

Exports results to results.json

*/

var fs = require('fs');

var _ = require("underscore");
var underscore_str = require("underscore.string");
_.mixin(underscore_str.exports());
global._ = _;

require('./source-array.js');
require('./app.js');

var results = _.map(sourcePhotoArray, function(photo) {
  return App.Parser.parsePhoto(photo);
});

results = JSON.stringify(results);
fs.writeFile('results.json', results, function(error) {
  if (error) {
    throw error;
  }
  console.log("Done!");
});