var async = require('async');
var yargs = require('yargs');
var request = require('request');

var argv = yargs.argv;


var GEOCODE_APIKEY = `AIzaSyAgctpcZbFuR7Um2mEWSHNQsjGjxkyJck0`;
var WEATHER_APIKEY = '9aacdd0e6978ea9d6d6763dbdb06253f';

var address = argv.address;
var addressEncoded = encodeURIComponent(address);

var addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}=${GEOCODE_APIKEY}`;

async.waterfall([
    function(callback){
        request({
            url: addressUrl, json: true
        }, function(error, request, body){
           if(error){
               callback('Unable to connect to the google server API', {});
           }
           else if(body.status==='ZERO_RESULTS'){
               callback('Unable to fetch the given address',{});
           }
           else{
               callback(null, {
                   lat : body.results[0].geometry.location.lat,
                   lng : body.results[0].geometry.location.lng
               });
           }
        });
    },
    function (result, callback) {
        var weatherUrl = `https://api.darksky.net/forecast/${WEATHER_APIKEY}/${result.lat},${result.lng}`;
        request({
            url: weatherUrl,
            json: true
        }, function(error, response, body){
            if(error) {
                callback('Unable to fetch the weather', {});
            }
            else{
                callback(null,{
                    temp: body.currently.temperature,
                    appTemp: body.currently.apparentTemperature
                });
            }
        });
    }
], function(errorMsg, result){
    if(errorMsg){
        console.log(errorMsg);
    }
    else{
        console.log(`The actual temp is ${result.temp}`);
        console.log(`The apparent temp is ${result.appTemp}`);
    }
});