const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
// const privatePath = path.resolve(__dirname, '../config/private.key');
// const publicPath = path.resolve(__dirname, '../config/public.key');
// const privateKey = fs.readFileSync(privatePath, 'utf8');
// const publicKey = fs.readFileSync(publicPath, 'utf8');
const privateKey = '51778657246321226641fsdklafjasdkljfsklfjd7148924065';
const publicKey = '51778657246321226641fsdklafjasdkljfsklfjd7148924065';

exports.generateAccessToken = (data, options = {}) => {
    options = Object.assign({
        // algorithm: 'RS256',
        expiresIn: 60 * 60 * 24 * 30,
    }, options);

    const token = jwt.sign(data, privateKey, options);

    return token;
};

exports.verify = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        jwt.verify(token, publicKey, (err, decode) => {
            if (err) {
                res.status(401).send(err);
            } else {
                req.user_id = decode.id;
                next();
            }
        });
    } catch (err) {
        console.log('error', err);
    }
}