class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;

		return this.length;
	}

	pop() {
		const item = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;

		return item;
	}

	delete( index ) {
		const item = this.data[index];
		this.shiftItems(index);

		return item;
	}

	shiftItems(index) {
		for(let i = index; i < this.length-1; i++ ) {
			this.data[i] = this.data[i+1];
		}

		delete this.data[this.length-1];
		this.length--;
	}
}


const newArray = new MyArray();

newArray.push('Hi');
newArray.push('how');
newArray.push('are');
newArray.push('you');
newArray.push('!');

console.log(newArray.get(3));

newArray.pop();
console.table(newArray);

newArray.delete(0);
console.table(newArray);