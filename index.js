'use strict';

const database = require('./startup/database');
const server = require('./startup/server');

class App {
    async start() {
        try {
            await database.connect();
            server.start();
        } catch (error) {
            console.error(`Cannot start server. Error: ${error}`);
        }
    }
}

module.exports = new App();