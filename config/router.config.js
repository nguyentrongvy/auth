'use strict';

const routers = Object.freeze([
    {
        path: '/users',
        router: 'routers/user.router',
    },
    {
        path: '/auth',
        router: 'routers/auth.router',
    }
]);

module.exports = routers;