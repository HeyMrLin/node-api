const Router = require('koa-router');
const router = new Router()
router.prefix('/home');


router.get('/', async (ctx, next) => {
  ctx.response.body = 'this is a home response!';
  // next;
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;
