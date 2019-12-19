const Koa = require('koa');
const app = new Koa();

const users = require('./routes/users');
const registerRouter  = require('./routes')
// router.get('/', async (ctx, next) => {
//   ctx.response.body = '<h1>Index</h1>';
// });

// app.use(users.routes()).use(users.allowedMethods());
// router.use('/users', users.routes()) 

// app.use(router.routes(), router.allowedMethods());
app.use(registerRouter())
module.exports = app;
