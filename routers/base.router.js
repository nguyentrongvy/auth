const { HttpMethod } = require('../common/constants');
const { verify } = require('../helpers/jwt.helper');

class BaseRouter {
    constructor() {
        this.router = require('express').Router();
        this.roots = [];
    }

    route(
        method,
        url,
        action,
        isVerify,
    ) {
        switch (method) {
            case HttpMethod.POST:
                isVerify ? this.router.post(url, verify, action) : this.router.post(url, action);
                break;
            case HttpMethod.PUT:
                isVerify ? this.router.put(url, verify, action) : this.router.put(url, action);
                break;
            case HttpMethod.DELETE:
                isVerify ? this.router.delete(url, verify, action) : this.router.delete(url, action);
                break;
            default:
                isVerify ? this.router.get(url, verify, action) : this.router.get(url, action);
                break;
        }
    }

    getRouter() {
        return this.router;
    }
}

module.exports = BaseRouter;