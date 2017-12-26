var yargs = require('yargs');

var geocodeAddress = require('./geocode/geocode');
var weather = require('./weather/weather');

var argv = yargs.argv;

var address = argv.address;

var encodedLocation = function(add){
    return new Promise(function(resolve, reject){
        geocodeAddress(add, function(errorMsg, result){
            if(errorMsg){
                reject(errorMsg);
            }
            else{
                resolve(result);
            }
        });
    });
}(address);

var weatherResult = encodedLocation.
    then(function(result){
        return new Promise(function(resolve, reject){
            weather(result.latitude, result.longitude, function(errorMsg, result){
                if(errorMsg){
                    reject(errorMsg);
                }
                else{
                    resolve(result);
                }
            })
        });
});


weatherResult.
then(function(result){
    console.log('The actual temperature is:', result.temperature);
    console.log('The apparent temperature is:', result.apparentTemperature);
}).catch(function(err){
    console.log(err);
});
