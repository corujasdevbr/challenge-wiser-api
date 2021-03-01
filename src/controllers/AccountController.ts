const accountService = require('../services/account.service');

class AccountController {

    index(req, res): any {
        return res.json({ message: 'Account' });
    }

    signin(req, res) {
        console.log(req.body);
        accountService
            .signin(req.body)
            .then((user) => (user ? res.json(user) : res.status(400).json({ message: 'Usuário ou Senha inválidos' })))
            .catch((error) => {
                res.status(400).json({ status: 400, message: error.message });
            });
    }
}

export default new AccountController();