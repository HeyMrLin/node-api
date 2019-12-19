const Router = require('koa-router');
const router = new Router()
const JwtUtil = require('../middleware/jwt');
router.prefix('/login');

router.get('/', async (next) => {
  const jwt = new JwtUtil({name: 'lin'});
  const token = jwt.generateToken();
  this.body = token;
});

module.exports = router;
