const Router = require('koa-joi-router');
const controller = require('../controllers/teste');

const router = Router();

router.name = 'Teste';
router.prefix('/teste');

router.route([
    {
        method: 'GET',
        path: '/',
        handler: [controller.teste]
    }
])

module.exports = router;