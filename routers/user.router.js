'use strict';

const BaseRouter = require('./base.router');
const { HttpMethod } = require('../common/constants');
const userController = require('../controllers/user.controller');
let isVerify = true;
let isVerify1 = false;

class UserRouter extends BaseRouter {
    init() {
        this.route(HttpMethod.POST, '', userController.register, isVerify1);
        this.route(HttpMethod.GET, '/lists', userController.list, isVerify);
    }
}

module.exports = new UserRouter();