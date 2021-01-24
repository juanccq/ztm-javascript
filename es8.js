console.log( 'Hi there'.padStart(10) );
console.log( 'Hi there'.padEnd(10) );

const func = (first, second, third, fourth, ) => {
	console.log(first, second, third, fourth);
}


func('a', 'b', 'c', 'd');


let obj = {
	username0: 'Antonio',
	username1: 'Efrain',
	username2: 'Henry'
}


Object.values(obj).forEach( value => console.log(value) );

Object.entries(obj).forEach( value => console.log(value) );

console.log( Object.entries(obj).map(value => value[1] + value[0].replace('username', '')) )