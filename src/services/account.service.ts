import jwt from 'jsonwebtoken';

const db = [ { email: 'wiser@wiser.com', password: 'admin@132' } ];

const signin = async ({ email, password }) => {

	const user = db.find((user) => user.password === password && user.email === email);

	if (user) {
		const token = await jwt.sign({ email }, 'tokenwiser');
		return {
			token
		};
	}
};

module.exports = {
	signin
};