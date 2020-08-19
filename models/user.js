const { mongoose } = require('./index');
const bcrypt = require('bcrypt');
const passwordHelper = require('../helpers/password.helper');
const { STATUS } = require('../common/constants');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    isActived: {
        type: Number,
        enum: Object.values(STATUS),
        default: STATUS.ACTIVED,
    }
    // session: [{
    //     token: {
    //         type: String,
    //     },
    //     expiresAt: {
    //         type: Number,
    //     }
    // }],
});

userSchema.pre('save', function (next) {
    const costFactor = 10;
    if (this.isModified('password')) {
        try {
            this.password = passwordHelper.hash(this.username.toLowerCase(), this.password);
            console.log('password', this.password);
            next();
        } catch (err) {
            console.log('err', err);
        }
    } else {
        next();
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;