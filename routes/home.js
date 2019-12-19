const Router = require('koa-router');
const router = new Router()
router.prefix('/');


router.get('/', async (next) => {
  this.body = 'this is a home response!';
  next();
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;
