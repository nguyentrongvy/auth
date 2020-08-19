const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const appConfig = require('../config/app.config');
const routers = require('../config/router.config');

class Server {
    start() {
        this.app = express();
        this.initStatic();
        this.initRouters();
        this.app.listen(appConfig.env.port, () => {
            console.log(`Server started on ${appConfig.env.host}:${appConfig.env.port}`)
        });
    }

    initStatic() {
        // this.app.use(morgan('dev'));
        this.app.use(bodyParser.json()); // todo
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    initRouters() {
        routers.forEach(router => {
            const route = require(path.resolve(router.router));
            route.init();
            this.app.use(router.path, route.getRouter());
        });
    }
}

module.exports = new Server();