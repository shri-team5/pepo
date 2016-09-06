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

const getUserProfileByUsername = (username, params) => {
    return instance.get('/users/username/' + username, {
        params: params
    });
};


const getUserProfileForAuth = (id, provider, params) => {
    return instance.get('/users/' + provider + '/' + id, {
        params: params
    });
};

const postUserProfile = (request) => {
    return instance.post('/users/', request)
};

const updateUserProfile = (id, request) => {
    return instance.put('/users/' + id, request)
};

const getTweets = (params) => {
    return instance.get('/tweets/v2/', {
        params: params
    });
};

const getTweet = (id, params) => {
    return instance.get('/tweets/' + id, {
        params: params
    });
};

const postTweet = (request) => {
    return instance.post('/tweets', request)
};

const subscribe = (id, request) => {
    return instance.post('/users/subscribe/' + id, request)
};
const unsubscribe = (id, request) => {
    return instance.post('/users/unsubscribe/' + id, request)
};

module.exports = {

    getTweets,
    getTweet,
    postTweet,

    getUserProfile,
    getUserProfileByUsername,
    getUserProfileForAuth,
    postUserProfile,
    updateUserProfile,

    subscribe,
    unsubscribe
};