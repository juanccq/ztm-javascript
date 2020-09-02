const obj = {
	name: 'Billy',
	sing() {
		return 'lalala ' + this.name;
	},	
	singAgain() {
		return this.sing() + '!';
	}
}


console.log( obj.sing() );
console.log( obj.singAgain() );


function importantPerson() {
	console.log( this.name );
}

const name = 'Sunny';

const obj1 = {
	name: 'Cassy',
	importantPerson: importantPerson
}

const obj2 = {
	name: 'Jacob',
	importantPerson: importantPerson
}


importantPerson();
obj1.importantPerson();
obj2.importantPerson();