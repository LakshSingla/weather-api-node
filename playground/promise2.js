const request = require('request');

const APIKEY = 'AIzaSyAgctpcZbFuR7Um2mEWSHNQsjGjxkyJck0';

var location = process.argv[2];
var locationEncoded = encodeURIComponent(location);
var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationEncoded}&key=${APIKEY}`;

// console.log(url);

/*var geocodeAddress = function(url){
    // console.log(urlx);
  return new Promise(function(resolve, reject){
      request({
          url: url,
          json: true
      }, function(err, res, body){
          if(err){
              reject('Couldnot connect to the google server');
          }
          else if(body.status==='ZERO_RESULTS'){
              reject('Unable to resolve the place');
          }
          else{
              resolve({
                  address: body.results[0].formatted_address,
              });
          }
      });
  });
};*/

var geocodeAddress = function(url){
    var err, bod, res;
    request({
        url: url,
        json: true
    }, function(error, body, response){
       err = error;
       bod = body;
       res = response;
    });
    if(false){
        return new Promise(function(resolve, reject){
            reject('Couldnot connect to the google servers');
        });
    }
    else if(false){
        return new Promise(function(resolve, reject){
            reject('Unable to find the address');
        });
    }
    else{
        return new Promise(function(resolve, reject){
            resolve('The callback was not initialised   ');
        });
    }
};

geocodeAddress(url).then(function(result){
    console.log(result);
}, function(err){
    console.log(err);
});