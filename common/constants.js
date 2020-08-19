'use strict';

const HttpMethod = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
});

const STATUS = Object.freeze({
    INACTIVED: 0,
    ACTIVED: 1
});

module.exports = Object.freeze({
    HttpMethod,
    STATUS,
})