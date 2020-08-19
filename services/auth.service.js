const passwordHelper = require('../helpers/password.helper');
const { userRepository } = require('../repositories');
const { generateAccessToken } = require('../helpers/jwt.helper');

class AuthService {
    async login(username, password) {
        const user = await getUserByCredentials(username, password);
        return user;
    }
}

async function getUserByCredentials(username, password) {
    const option = {
        where: {
            username: username.toLowerCase(),
            password: passwordHelper.hash(username.toLowerCase(), password),
        },
    };

    const user = await userRepository.getOne(option);
    const tokenData = getTokenData(user);
    user.accessToken = tokenData;

    return user;
}

function getTokenData(user) {
    const tokenData = {
        user: {
            _id: user._id,
            name: user.name,
            username: user.username,
            password: user.password,
        }
    };

    const token = generateAccessToken(tokenData);

    return token;
}

module.exports = new AuthService();