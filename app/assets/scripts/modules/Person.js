class Person{

	constructor( fullName, favColor ){
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet(){
		console.log("what up " + this.name +  ". I heard you like the color " + this.favoriteColor);
	}

}

export default Person;