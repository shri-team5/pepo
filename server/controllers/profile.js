const axios = require('axios');
const config = require('../config');

const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');
const profilePage = require('../pages/profile');


const isDev = process.env.NODE_ENV === 'development';


const instance = axios.create({
    baseURL: "http://" + config.backendHost + ':' + config.backendPort,
    timeout: config.backendTimeout,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
});

const get = (req, res) => {

    let params = {
        userId: req.get('userId')
    };
    if (isDev) {
        params['userId'] = "57b86709eb4b20a0550e09a4";
    }


    instance.get('/tweets', {
        params: params
    })
        .then(response => {
            render(req, res, profilePage(response.data));
        })
        .catch(e => {
            console.log('Gor error: ' + e.message);
            render(req, res, profilePage([]));
        });

};

const post = (req, res) => {
    res.send('Got post /profile')
};

module.exports = {
    get,
    post
};

