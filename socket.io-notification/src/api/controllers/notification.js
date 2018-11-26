const Notification = require('../models/notification')

const saveNotification = async ctx => {

    const notification = new Notification(ctx.request.body)
    notification.save();

    return (
        ctx.body = {
            ok: 'Ok',
        }
    )
}

const getNotifications = async ctx => {

    const notifications = await Notification.find({ user_id: ctx.header.user_id });

    return (
        ctx.body = {
            data: notifications
        }
    )
}

module.exports = {
    saveNotification,
    getNotifications
}