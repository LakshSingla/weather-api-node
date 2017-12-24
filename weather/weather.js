const request = require('request');

let APIKEY = '9aacdd0e6978ea9d6d6763dbdb06253f';

getWeather = (latitude, longitude , callback ) => {
    let url = `https://api.darksky.net/forecast/${APIKEY}/${latitude},${longitude}`;
    request({
        url: url,
        json: true
    }, function(error, response, body){
       if(!error && response.statusCode===200) {
           callback(null, {
               temperature: body.currently.temperature,
               apparentTemperature : body.currently.apparentTemperature
           });
       }
       else{
           callback('Could not fetch the weather', {});
       }
    });
};


module.exports = {
  getWeather: getWeather
};