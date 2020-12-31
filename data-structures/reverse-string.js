function reverse(str){
	let reversed = [];
	const arr = str.split('');

	for(let i = 0; i<arr.length; i++) {
		reversed[arr.length-i] = arr[i];
	}

	return reversed.join('');
}


console.log(reverse('Hi my name is juan'));


function reversev2(str) {
	if( !str || str.length < 2 || typeof str !== 'string' ) {
		return 'No valid string';
	}

	const backwards = [];
	const totalItems = str.length -1;

	for(let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}

	return backwards.join('')
}


console.log(reversev2('Hi my name is juan'));


function reversev3(str) {
	return str.split('').reverse().join('');
}


console.log(reversev3('Hi my name is juan'));


const reversev4 = str => [...str].reverse().join('');


console.log(reversev4('Hi my name is juan'));