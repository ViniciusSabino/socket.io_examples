const Koa = require('koa');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const router = require('./routes')
const config = require('./config')
const mongoose = require('./database/mongodb')

const api = new Koa();

mongoose.createConnection();

api.use(bodyParser({
    onerror: function (err, ctx) {
        ctx.request.body = {};
    }
}))

api.use(
    cors({
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE',
        allowHeaders: ['Content-Type', 'Authorization']
    })
)

api.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {

        const { statusCode, status, message } = error;

        ctx.status = statusCode || status || 500;

        ctx.body = {
            error: message,
        };
    }
});

api.use(router);

api.listen(config.port, () => console.log(`running at ${config.port}`));