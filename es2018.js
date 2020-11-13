// Javascript new features 2018
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
];

const animals = {
	tiger: 25,
	lion: 5,
	monkey: 2
}

const {tiger, ...rest} = animals;

console.log(tiger, rest);

// finally on promises
Promise.all( urls.map( url => 
	fetch(url).then( resp => resp.json() )
 ) ).then( array => {
	console.log( 'users', array[0] )
	console.log( 'posts', array[1] )
	console.log( 'albums', array[2] )
} )
 .catch('opps')
 .finally( () => console.log( 'this will be execute always' ))


// for await of
const getData = async function() {
	const arrayOfPromises = urls.map( url => fetch(url) );

	for await (let request of arrayOfPromises){
		const data = await request.json();
		console.log(data);
	}
}

getData();