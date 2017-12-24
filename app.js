// const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');
const argv = yargs.argv;

var address = yargs.argv.address || "Unesco Apartments, Patparganj, Delhi";

geocode.geocodeAddress(address, function(errorMsg, results){
    if(errorMsg){
        console.log(errorMsg)
    }
    else{
        // console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, function (errorMsg, results) {
            if(!errorMsg){
                // console.log(JSON.stringify(results, undefined, 2));
                console.log(`It's currently ${results.temperature}.`);
                console.log(`It feels like ${results.apparentTemperature}`);
            }
            else{
                console.log(errorMsg);
            }
        });
    }
});

