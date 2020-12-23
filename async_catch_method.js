Promise.resolve('asyncfail')
	.then(response => {
		throw new Error('oppsie');
		return response;
	})
	.then( response => {
		console.log(response);
	} )
	.catch( err => {
		return err
	} )
	.then( response => {
		console.log(response.message)
		throw new Error('second error ');
	} )
	.catch(err => { // this catch only works for the second throw error, cause the first one was already catched
		console.log('final error');
	})


// nested example, every promise Must have a catch function
Promise.resolve('asyncfail')
	.then(response => {
		Promise.resolve()
		.then( () => {
			throw new Error('nested error')
		} )
		.catch(console.log) // catch the nested error 

		return 5;
	})
	.then( response => {
		console.log(response);
	} )
	.catch( err => {
		return err
	} )
	.then( response => {
		console.log('Throw error handler '+response.message)
		throw new Error('second error ');
	} )
	.catch(err => { // this catch only works for the second throw error, cause the first one was already catched
		console.log('final error 2');
	})