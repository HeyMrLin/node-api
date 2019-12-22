const Koa = require('koa');
const app = new Koa();
const static_ = require('koa-static');
const path = require("path")
const registerRouter  = require('./routes')


// app.use(router.routes(), router.allowedMethods());
app.use(registerRouter())

app.use(static_(
  path.join(__dirname, '/public')
))
module.exports = app;
