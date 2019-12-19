const Koa = require('koa');
const app = new Koa();

const users = require('./routes/users');
const koaRouter =  require('koa-router')
const router = koaRouter()

router.use('/users', users.routes()) 

app.use(router.routes(), router.allowedMethods());

module.exports = app;
