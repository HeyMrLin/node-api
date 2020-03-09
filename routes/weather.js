const Router = require('koa-router');
const router = new Router();
const koa2Req = require('koa2-request');
// router.prefix('/weather');


router.get('/', async (ctx, next) => {
  const ip_url = `http://apis.juhe.cn/ip/ipNew?ip=${ctx.request.ip}&key=545bd393ee4b2b4506fc242b06fb6e45`;
  const address = await koa2Req(ip_url);
  const city = address.result? address.result.City : '深圳';
  const url = `http://apis.juhe.cn/simpleWeather/query?city=${city}&key=1ff6e706692fbd074aa2ed98924614fc`
  const w = await koa2Req(encodeURI(url));
  ctx.response.body = w.body;
  // next;
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;