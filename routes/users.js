const router = require('koa-router')();
const pool = require('../lib/mysql');
const { query } = pool;
router.prefix('/users');


router.get('/', function *(next) {
  // select * from users where username=? and password=?
  const _sql = 'select * from users where username=? and password=?'
  yield res = query( _sql, [ 'Tom', 254 ] );
  res.then(e => {
    console.log(e.length);
    this.body = {
      message: 'success',
      status: 1,
      data: e,
    }
  })
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;
