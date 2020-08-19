'use strict';

const BaseRouter = require('./base.router');
const { HttpMethod } = require('../common/constants');
const authController = require('../controllers/auth.controller');
let isVerify = false;

class AuthRouter extends BaseRouter {
    init() {
        this.route(HttpMethod.POST, '/login', authController.login, isVerify = false);
    }
}

module.exports = new AuthRouter();