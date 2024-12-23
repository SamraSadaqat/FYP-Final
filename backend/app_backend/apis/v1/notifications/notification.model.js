var mongoose = require('mongoose');
const NotificationModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: String,
    body: String,
    screen: String,
    creationDate: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'notifications'
})
module.exports = mongoose.model("notifications", NotificationModel);