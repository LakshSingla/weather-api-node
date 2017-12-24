console.log("Starting app");

setTimeout(()=>{
	console.log("Inside of the callback");
}, 2000);

setTimeout(()=>{
	console.log("Inside the second timeout");
}, 0);

console.log("Finishing up");

