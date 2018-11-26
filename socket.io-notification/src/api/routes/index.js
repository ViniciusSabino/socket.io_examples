const KoaCompose = require('koa-compose');
const testeRouter = require('./teste');
const notificationRouter = require('./notification');


const middlewares = [testeRouter.middleware(), notificationRouter.middleware()];

module.exports = KoaCompose([...middlewares]);