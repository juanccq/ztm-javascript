(async function() {
	try {
		await Promise.resolve('revolved')
		await Promise.reject('oppsie');
	}
	catch( err ) {
		console.log(err);
	}
}) ()