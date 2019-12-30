const Router = require('koa-router');
const router = new Router()
const JwtUtil = require('../middleware/jwt');
router.prefix('/login');

router.post('/', async (ctx, next) => {
  
  const jwt = new JwtUtil({name: 'lin'});
  const token = jwt.generateToken();
  ctx.response.body = token;
});

module.exports = router;
