
var _ = require('lodash');
var continent = require('./data/continent.json');
var iso = require('./data/iso.json');
var country = require('./data/country_debt.json');
var fs = require('fs');
var data = require('./data/data.json')

module.exports = {

  
}
var swapISOs = function() {
  var data = {};
  var iso2Arr = _.keys(iso);
  _.forEach(iso2Arr, function(val) {
    var iso3 = iso[val.toString()];
    data[iso3] = val;
  })
  setTimeout(function() {
    console.log(JSON.stringify(data));
  }, 1000); 
}


function modifyFiles() {
  // add ISO2 code to country list json
  var newList = [];
  //iterate through json array
  _.forEach(country, function(countryData) {
    // take ISO2 of country list
    var iso3 = countryData["Country Code"];
    var iso2 = iso[iso3.toString()];
    if(iso2) {
      console.log(iso2)
      var cont = continent[iso2.toString()]
      countryData["iso2"] = iso2;
      countryData["continent"] = cont;
      console.log(countryData);
      newList.push(countryData);
    }
  })

  setTimeout(function() {

    fs.writeFile('./data/country.json', JSON.stringify(newList))
    // console.log(newList.length)
  }, 5000)
  //take country code, apply to other json file
  // setTimeout(function() {
  // }, 6000).bind(this)
  // 
  // add continent json to country list
  // create new json
}

function justISO() {
  var links = data.links;
  var packet = [];

  _.forEach(links, function(val) {

    var source = val["source"];
    var target = val["target"];

    //take first 2 characters
    var iso2source = source.substring(0, 2);
    var iso2target = target.substring(0, 2);

    val["source"] = iso2source;
    val["target"] = iso2target;

    console.log(val)

    packet.push(val)
  })

  setTimeout(function() {
    fs.writeFile('./data/links.json', JSON.stringify(packet))
  }, 5000)
}

justISO();

function addContinent() {
  var arr = [];
  _.forEach()
}