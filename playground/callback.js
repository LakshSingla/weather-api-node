var getUser = (id, callback) =>{
	user = {
		id: id, name: 'Vikram'
	}
	setTimeout(function(){callback(user);}, 3000);
};

getUser(32, userObject=>{
	console.log(userObject);
})
