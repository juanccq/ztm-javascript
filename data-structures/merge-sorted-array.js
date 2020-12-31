const mergeSortedArray = (a,b) => {
	return [...a, ...b].sort( (a,b) => {return a-b;} )
}

let res = mergeSortedArray([0,3,4,31],[4,6,30]);

console.log(res);