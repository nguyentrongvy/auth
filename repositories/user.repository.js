const BaseRepository = require('./base.repository');

module.exports = class UserRepository extends BaseRepository {
    constructor() {
        super('User');
    }
}
