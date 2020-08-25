

const { Router } = require('express');
const controller = require('./user.controller');


const auth = require('./../../auth/auth.service');


const router = new Router();


router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', controller.create);

module.exports = router;
