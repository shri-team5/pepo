const axios = require('axios');
const config = require('../config');

const instance = axios.create({
    baseURL: "http://" + config.backendHost + ':' + config.backendPort,
    timeout: config.backendTimeout,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
});

const getUserProfile = (id, params) => {
    return instance.get('/users/' + id, {
        params: params
    });
};

const getTweets = (params) => {
    return instance.get('/tweets', {
        params: params
    });
};

const postTweet = (request) => {
    return instance.post('/tweets', request)
};

module.exports = {
    getTweets,
    postTweet,
    getUserProfile
};