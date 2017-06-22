function Person( fullName, favColor ){

	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function(){
		console.log("HELLO");
	}

}

module.exports = Person;