// Bigint representation
let num1 = 1234343333n;
let num2 = 787980002457n;

console.log( num1+num2 );
console.log(typeof (num1+num2));


// Optional chaining operator
let books = {
	thriller: {
		author: 'Edgar Allan Poe',
		pages: 540,
		rate: 10
	},
	comedy: {
		author: 'Jhon Carpenter',
		pages: 578
	}
}

let rate1 = books.thriller.rate; // this works because the object has the property
let rate2 = books?.comedy?.rate; // this will check on each property level before accesing the nested one, return undefined if one of the properties doesn't exists

console.log(rate1);
console.log(rate2);



// Nullish Collascale operator
// ?? check if the expresion is defined and is not null, is more effective than || operator

let books2 = {
	comedy: {
		author: 'Jhon Carpenter',
		pages: 578,
		rate: false
	}
};

let rate3 = books2?.comedy?.rate ?? 'No rate registered'

console.log(rate3);