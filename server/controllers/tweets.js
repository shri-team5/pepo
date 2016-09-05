const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');
const tweetPage = require('../pages/tweet');

const Api = require('../api');
const Server = require('../api/server');

const config = require('./config');
const configApi = require('../config');

const formdata = require('form-data');

var fs = require('fs');
var http = require('http');

const get = (req, res) => {

    let params = {
        userId: req.user._id,
        count: config.initialCount
    };

    const {offset, count} = req.query,
        isQueryParamsExist = offset || count;

    if (isQueryParamsExist) {
        params.offset = offset;
        params.count = count;
    }

    Server.fetch(Api.getTweets(params))
        .then(
            response => {
                if (isQueryParamsExist) {
                    render(req, res, null, response.data.map(item => (
                    {block: 'tweet', data: item}
                    )));
                } else {
                    render(req, res, feedPage(response));
                }
            }
        )
        .catch(e => {
            console.log('Got error: ' + e.message); // eslint-disable-line no-console
            render(req, res, feedPage({error: e.message}));
        });
};
const getTweet = (req, res) => {

    const {id} = req.params;

    let params = {};

    Server.fetchAsync([Api.getTweet(id, params), Api.getTweetReplies(id, params)])
        .then(
            responses => {
                console.log(responses);
                render(req, res, tweetPage(responses[0], responses[1]));
            }
        )
        .catch(e => {
            console.log('Got error: ' + e.message); // eslint-disable-line no-console
            render(req, res, tweetPage({error: ''}, {error: e.message}));
        });

};

const post = (req, res) => {

    const {text, parentTweet} = req.body;

    let form = new formdata();

    form.append('text', text);
    form.append('type', 'text');
    form.append('userId', req.user._id);
    form.append('parentTweet', parentTweet);
    req.file && form.append('image', fs.createReadStream(req.file.path));

    var request = http.request({
        method: 'post',
        host: configApi.backendHost,
        port: configApi.backendPort,
        path: '/tweets',
        headers: form.getHeaders()
    });

    form.pipe(request);

    request.on('response', function (response) {

        console.log(response);
        res.redirect('/');
    });


};

module.exports = {
    get,
    getTweet,
    post
};
