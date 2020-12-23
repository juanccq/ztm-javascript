class AuthenticatorError extends Error{
	constructor(message) {
		super(message)

		this.name = 'AuthenticatorError';
		this.favoriteFruit = 'grapes';
	}
}

const a = new AuthenticatorError('error');
console.log(a.favoriteFruit);

throw new AuthenticatorError('asdfad');