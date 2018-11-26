const mongoose = require('mongoose');
const config = require('./../../config')

mongoose.Promise = global.Promise

mongoose.createConnection = () => {

    mongoose.connect(
        config.mongo
    )
}

module.exports = mongoose
