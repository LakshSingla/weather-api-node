var async = require('async');

async.waterfall([
    function(callback){
        callback(null, 1, 2);
    },
    function(arg1, arg2, callback){
        callback(null, arg1+arg2);
    }
], function(err, result){
    console.log(result);
});