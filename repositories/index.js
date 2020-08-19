const UserRepository = require('./user.repository');

// ============LOAD_MODELS=============
const { loadModels } = require('../models');
loadModels();

module.exports = {
    userRepository: new UserRepository(),
}