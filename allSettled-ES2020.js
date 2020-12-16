const promiseOne = new Promise( (resolve, rejected) => 
	setTimeout(resolve, 6000)
)

const promiseTwo = new Promise( (resolve, rejected) =>
	setTimeout(rejected, 3000)
)

// allSettled wait until all promises are executed and the return all the promises, the response time depends on the promise that take most time
Promise.allSettled( [promiseOne, promiseTwo] ).then(data => console.log(data))
	.catch(e => console.log('something failed', e))

	