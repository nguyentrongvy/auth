'use strict';

const appConfig = Object.freeze({
    env: {
        port: process.env.PORT || 4051,
        host: process.env.HOST || 'localhost',
        stage: process.env.NODE_ENV || 'dev',
    },
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/nodejs',
        options: {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    },
});

module.exports = appConfig;