require('dotenv').load();

module.exports = {
    port: process.env.PORT,
    mongo: process.env.MONGO_TEST
};
