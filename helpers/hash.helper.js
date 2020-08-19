'use strict';

const crypto = require('crypto');

class HashHelper {
    hash(algorithm, text) {
        return crypto.createHash(algorithm).update(text).digest('hex');
    }
    sha512(text) {
        return this.hash('sha512', text);
    }
}

module.exports = new HashHelper();