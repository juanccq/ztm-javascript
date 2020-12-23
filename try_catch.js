function fail(){

	try{
		console.log('first');
		throw new Error('oppsie');

		console.log('second');
	}
	catch(err) {
		console.log(err.message);
	}
	finally {
		console.log('this always is executed');
		return false;
	}

	console.log('this might not be executed');
}

fail();