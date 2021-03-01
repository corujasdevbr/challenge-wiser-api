import jwt from 'jsonwebtoken';

const db = [ { email: 'wiser@wiser.com', password: 'admin@132' } ];

interface ISignin {
	email : string,
	password : string
}

const signin = async ( props : ISignin ): Promise<{ token: string; }> => {

	const user = db.find((user) => user.password === props.password && user.email === props.email);

	if (user) {
		const token = await jwt.sign( props.email , 'tokenwiser');
		return {
			token
		};
	}
};

module.exports = {
	signin
};