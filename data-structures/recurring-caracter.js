'use strict'

const firstRecurring = (array) => {
	let recurrring = [];

	for(let i = 0; i < array.length; i++) {
		if( recurrring.indexOf( array[i] )  !== -1 ) {
			return array[i];
		}

		recurrring.push( array[i] );
	}

	return undefined;
}



console.log( firstRecurring( [2,5,1,2,3,5,1,2,4] ) );
console.log( firstRecurring( [2,1,1,2,3,5,1,2,4] ) );
console.log( firstRecurring( [2,3,4,5] ) );