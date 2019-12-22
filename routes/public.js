const Router = require('koa-router');
const router = new Router()

const path = require('path');
const static = require('koa-static');
const home   = static(path.join(__dirname)+'/public/');
router.prefix('/public');

router.get('/', async (ctx, next) => {
  ctx.response.body = 'this is a public response!';
  // next;
});


module.exports = router;
