const { userRepository } = require('../repositories/index');
const { generateAccessToken } = require('../helpers/jwt.helper');

class UserService {
    async register({
        email,
        password,
        name,
        username,
    }) {
        const user = await userRepository.create({
            email,
            password,
            name,
            username,
        });
        const data = {
            id: user._id.toHexString(),
        };
        const token = generateAccessToken(data);
        console.log('token',token);
    }
}

module.exports = new UserService();