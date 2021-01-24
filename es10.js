const array = [1,2,[3,4], 8, 9, [12,[7]]];
console.log(array.flat(2));

const entries = [2,,,4,5,6,,7];
console.log(entries.flat())

const array2 = [2,6,4,9];
console.log( array2.flatMap(item => item + 100) )

let string1 = '    string1';
let string2 = 'string2       ';

console.log(string1.trimStart());
console.log(string2.trimEnd());


const profiles = [['juan', 38], ['gus', 35], ['elain', 44]]

console.log(Object.fromEntries(profiles));


try {
	bb + 'asdf';
} catch {  // this catch sentence could not have a (error)  parameter
	console.log('there is an error ');
}