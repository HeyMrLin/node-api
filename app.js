const Koa = require('koa');
const app = new Koa();
const static_ = require('koa-static');
const bodyParser = require('koa-bodyparser')
const path = require("path")
const registerRouter  = require('./routes')
const cors = require('koa2-cors');

app.use(bodyParser())
// app.use(router.routes(), router.allowedMethods());
app.use(registerRouter())
// app.use(static_(
//   path.join(__dirname, '/public')
// ))
app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
module.exports = app;
