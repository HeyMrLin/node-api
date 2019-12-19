const Router = require('koa-router');
const router = new Router();
const UserController = require('../controllers/users');
// router.prefix('/users');


router.get('/users/:id',UserController.detail)
// router.get('/',async (ctx, next) => {
//   ctx.response.body = '1'
// })
module.exports = router
