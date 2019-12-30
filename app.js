const Koa = require('koa');
const app = new Koa();
const static_ = require('koa-static');
const bodyParser = require('koa-bodyparser')
const path = require("path")
const registerRouter  = require('./routes')

app.use(bodyParser())
// app.use(router.routes(), router.allowedMethods());
app.use(registerRouter())

app.use(static_(
  path.join(__dirname, '/public')
))
module.exports = app;
