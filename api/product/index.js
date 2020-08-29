

const { Router } = require('express');

const controller = require('./product.controller');

const auth = require('./../../auth/auth.service');
const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/',auth.isAuthenticated(), controller.create);
router.put('/:id',auth.isAuthenticated(), controller.update);
router.delete("/:id",auth.isAuthenticated(), controller.deleteproduct);
module.exports = router;
