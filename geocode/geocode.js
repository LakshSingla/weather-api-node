const request = require('request');

const APIKEY = 'AIzaSyAgctpcZbFuR7Um2mEWSHNQsjGjxkyJck0';

let geocodeAddress = function (address, callback) {
    var addressEncoded = encodeURIComponent(address);
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}=${APIKEY}`;

    request({
        url: url,
        json: true
    },function(error, response, body){
        if(error){
            callback("Unable to connect to the google geocode servers", {});
        }
        else if (body.status==='ZERO_RESULTS'){
            callback("Unable to fetch the given address",{});
        }
        else if (body.status==='OK'){
            callback(null, {
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            });
        }
        else{
            callback("Error occured, unable to realise the reason of the error",{});
        }
    });
};

module.exports = {
    geocodeAddress : geocodeAddress
};