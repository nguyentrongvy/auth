const BaseController = require('./base.controller');
const authService = require('../services/auth.service');

class AuthController extends BaseController {
    async login(req, res, next) {
        const {
            username,
            password,
        } = req.body;

        const user = await authService.login(username, password);
        res.status(200).json({
            success: 200,
            data: user,
        });
    }
}

module.exports = new AuthController();