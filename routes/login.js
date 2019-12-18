const router = require('koa-router')();
const JwtUtil = require('../lib/jwt');

router.prefix('/login');

router.get('/', function *(next) {
  const jwt = new JwtUtil({name: 'lin'});
  const token = jwt.generateToken();
  this.body = token;
});

module.exports = router;
