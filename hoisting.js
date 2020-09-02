var favoriteFruit = 'grapes';

var foodThoughts = function() {
	console.log("Original favorite food: " + favoriteFruit);

	var favoriteFruit = 'sushi';  // The var keyword is causing the hoisting on this context execution, so the line #4 will print undefined for favoriteFruit variable

	console.log("New favorite food: " + favoriteFruit);	
}

foodThoughts();