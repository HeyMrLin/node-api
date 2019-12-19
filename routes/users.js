const Router = require('koa-router');
const router = new Router();
const UserController = require('../controllers/users');
router.prefix('/user');


router.get('/user/:id',UserController.detail)
module.exports = router
