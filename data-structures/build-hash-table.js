'use strict'

class Hashtable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash( key ) {
		let hash = 0;

		for(let i=0; i<key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}

		return hash;
	}

	set(key, value) {
		let position = this._hash(key);
		console.log(position)

		if(typeof this.data[position] === 'undefined') {
			this.data[position] = new Array();
		}

		this.data[position].push( {key, value} );

		console.log(this.data);
	}

	get(key) {
		let position = this._hash(key);

		for(let i = 0; i < this.data[position].length; i++) {
			
			if( this.data[position][i].key == key ) {
				return this.data[position][i].value;	
			}
		}

		return undefined;
	}

	keys() {
		let keysArray = [];

		for( let i=0; i<=this.data.length; i++ ){
			if( this.data[i] ) {
				for(let j=0; j < this.data[i].length; j++) {
					keysArray.push(this.data[i][j].key)
				}
			}
		}

		return keysArray;
	}
}


const myHashTable = new Hashtable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 1000);
myHashTable.set('appless', 100);
myHashTable.set('lemon', 120);
console.log( myHashTable.get('appless') );
console.log( myHashTable.keys() );