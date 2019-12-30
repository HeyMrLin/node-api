const Router = require('koa-router');
const router = new Router();
const UserController = require('../controllers/users');

router.prefix('/registered');

router.post('/', UserController.create);

module.exports = router;
