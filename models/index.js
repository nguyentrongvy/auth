const mongoose = require('mongoose');
const { loadModules } = require('../helpers/load-modules');

module.exports = {
    mongoose,
    loadModels: function () {
        loadModules('models');
    },
}