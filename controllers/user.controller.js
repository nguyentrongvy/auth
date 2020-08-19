const BaseController = require('./base.controller');
const userService = require('../services/user.service');

class UserController extends BaseController {
    async register(req, res, next) {
        try {
            const {
                email,
                name,
                password,
                username,
            } = req.body;
            const result = await userService.register({
                email,
                name,
                password,
                username,
            });
            res.status(200).json({
                success: true,
                result,
            });
        } catch (error) {
            console.log('error', error);
        }
    }

    async list(req, res, next) {
        const result = [{
            id: 1,
            name: 'vy'
        }];
        res.status(200).json({
            result
        });
    }
}

module.exports = new UserController();