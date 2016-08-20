const axios = require('axios');
const config = require('../config');

const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');


const isDev = process.env.NODE_ENV === 'development';



const instance = axios.create({
    baseURL: "http://" + config.backendHost + ':' + config.backendPort,
    timeout: config.backendTimeout
});

const get = (req, res) => {

    let params = {
        userId: req.get('userId')
    };
    if(isDev){
        params['userId'] = '57b86709eb4b20a0550e09a4';
    }


    instance.get('/tweets', {
            params:params
        })
        .then(response => {
            render(req, res, feedPage(response.data));
        })
        .catch(e => {
            res.send("Got error: " + e.message);
        });

};

const post = (req, res) => {

    const {text} = req.body;

    let request = {
        text,
        type: 'text',
        author: req.get('userId')
    };

    if(isDev){
        request['author'] = '1'
    }

    instance.post('/tweets', request)
        .then(() => {
            get(req, res);
        })
        .catch((e)=> {
            res.send("Got error: " + e.message);
        });


};

module.exports = {
    get,
    post
};

