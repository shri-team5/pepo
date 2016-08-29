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
    return instance.put('/users/'+id, request)
};

const getTweets = (params) => {
    return instance.get('/tweets', {
        params: params
    });
};
const searchTweets = (params) => {
    return instance.get('/tweets/world', {
        params: params
    });
};

const postTweet = (request) => {
    return instance.post('/tweets', request)
};

module.exports = {
    getTweets,
    postTweet,
    getUserProfile,
    getUserProfileByUsername,
    getUserProfileForAuth,
    postUserProfile,
    searchTweets,
    updateUserProfile
};