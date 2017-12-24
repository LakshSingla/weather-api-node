var asyncAdd = function(a, b){
    return new Promise(function(resolve, reject){
        // console.log('In promise');
        console.log('Intsoos');
        if(typeof a === 'number' && typeof b ==='number'){
            resolve(a+b);
        }
        else{
            reject('This shit aint working');
        }
    });
};
asyncAdd(5,7).then(function(res){
    console.log('Result:', res);
    // return asyncAdd(res, 10);
}, function(err){
    console.log(err);
}).then(function(res){
    console.log('res', res);
    return new Promise(function(res, rej){
        console.log('In new Promise');
        rej();
    });
}, function (err) {
    console.log('err', err);
}).then(function(res){
    console.log('This is gonna run no matter what');
}, function(err){
    console.log('This is not gonna run no matter what');
});

console.log('-----------------');

function newPr(){
    return new Promise(function(resolve, reject){
        console.log("INtis");
        reject(7);
        resolve(5);
    });
}

newPr().then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});

