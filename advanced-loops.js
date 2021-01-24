const basket = ['oranges', 'apples', 'grapes']
const detailedBasket = {
	oranges: 10,
	apples: 14,
	grapes: 41
}

// used only on iterables like arrays and strings
for( item of basket ){
	console.log(item);
}


// Used only on enumerables like objects, on arrays only return the indexes 
for( item in detailedBasket ) {
	console.log(item);
}