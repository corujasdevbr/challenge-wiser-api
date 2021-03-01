import routerExpress from 'express';

const router = routerExpress.Router();

import accountController from '../controllers/AccountController';

router.post('/account/signin', accountController.signin);

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

export default router;