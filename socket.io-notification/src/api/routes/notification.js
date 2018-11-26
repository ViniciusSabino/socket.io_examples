const Router = require('koa-joi-router');
const controller = require('../controllers/notification');

const router = Router();

router.name = 'Teste';
router.prefix('/notifications');

router.route([
    {
        method: 'POST',
        path: '/',
        handler: [controller.saveNotification]
    },
    {
        method: 'GET',
        path: '/',
        handler: [controller.getNotifications]
    },
])

module.exports = router;