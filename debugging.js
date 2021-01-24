const flattened = [[0,1], [2,3], [4,5]].reduce((a,b) => {
	debugger;
	return a.concat(b)
}, []);