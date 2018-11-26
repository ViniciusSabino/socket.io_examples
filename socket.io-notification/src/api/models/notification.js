const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    identity: { type: String, require: true },
    subject: { type: String, require: true },
    message: { type: String, require: true },
    type: { type: String, require: true, uppercase: true },
    appointment_date: { type: Date, require: false },
    created_date: { type: Date, default: Date.now },
    status: { type: String, required: true },
    user_id: { type: Number, required: true },
    push_status: { type: String, required: true }
})

module.exports = mongoose.model('notifications', notificationSchema)
