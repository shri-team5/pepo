const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');
const tweetPage = require('../pages/tweet');

const Api = require('../api');
const Server = require('../api/server');

const config = require('../config');

const FormData = require('form-data');

var fs = require('fs');
var http = require('http');

const get = (req, res) => {

    const {offset, count} = req.query;

    let params = {
        feed: req.user._id,
        count: count ? count : config.tweets.initialCount
    };
    offset && (params.offset = offset);

    Server.fetch(Api.getTweets(params))
        .then(
            response => {
                render(req, res, feedPage(response));
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

    Server.fetchAsync([Api.getTweet(id, params), Api.getTweets({tweet: id})])
        .then(
            responses => {
                render(req, res, tweetPage(responses[0], responses[1]));
            }
        )
        .catch(e => {
            console.log('Got error: ' + e.message); // eslint-disable-line no-console
            render(req, res, tweetPage({error: ''}, {error: e.message}));
        });

};

const post = (req, res) => {

    const {text, parentTweet, location, address, linkimage, linktitle, linkdesc} = req.body;

    let form = new FormData();

    form.append('text', text);
    form.append('type', 'text');
    form.append('userId', req.user._id);
    form.append('parentTweet', parentTweet);
    form.append('location', location);
    if (linkimage || linktitle || linkdesc) {
        form.append('linkimage', linkimage);
        form.append('linktitle', linktitle);
        form.append('linkdesc', linkdesc);
    }
    req.file && form.append('image', fs.createReadStream(req.file.path));

    let request = http.request({
        method: 'post',
        host: config.backendHost,
        port: config.backendPort,
        path: '/tweets',
        headers: form.getHeaders()
    });

    form.pipe(request);

    request.on('response', function (response) {
        res.redirect('/');
    });
};

const choose = (req, res) => {
    const {offset, count, tweet, search} = req.query;
    let {feed, user} = req.query;

    let params = {
        count: count ? count : config.tweets.initialCount
    };

    if (feed === 'self') {
        feed = req.user._id;
    }
    if (user === 'self') {
        user = req.user._id;
    }

    feed && (params.feed = feed);
    user && (params.user = user);
    tweet && (params.tweet = tweet);
    search && (params.search = search);
    offset && (params.offset = offset);


    Server.fetch(Api.getTweets(params))
        .then(
            response => {
                render(req, res, null, response.data.map(
                    item => ({block: 'tweet', data: item})
                ));
            }
        )
        .catch(e => {
            console.log('Got error: ' + e.message); // eslint-disable-line no-console
            // render(req, res, feedPage({error: e.message}));
            res.send('Что-то пошло не так :-(');
        });

};

module.exports = {
    get,
    getTweet,
    post,
    choose
};
