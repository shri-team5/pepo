const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');
const tweetPage = require('../pages/tweet');

const Api = require('../api');
const Server = require('../api/server');

const config = require('./config');

const get = (req, res) => {

    let params = {
        userId: req.user._id,
        count: config.initialCount
    };

    const { offset, count } = req.query,
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
                        { block: 'tweet', data: item }
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

    let params = {
        userId: req.user._id
    };

    Server.fetch(Api.getTweets(params))
        .then(
            response => {

                const parentTweet = {
                    _id: '57bf2a4aff3100353e28886d',
                    updatedAt: '2016-08-25T17:26:34.467Z',
                    createdAt: '2016-08-25T17:26:34.467Z',
                    author: {
                        _id: '57c1830e60e7c7466f271eaa',
                        updatedAt: '2016-08-20T14:19:53.201Z',
                        createdAt: '2016-08-20T14:19:53.201Z',
                        description: 'Lorem Ipsum',
                        username: 'superuser',
                        avatarPath: 'http://placehold.it/96x96',
                        fullName: 'Вася Пупкин',
                        __v: 0,
                        subscriptions: []
                    },
                    type: 'text',
                    text: 'hhh',
                    __v: 0
                };

                render(req, res, tweetPage(parentTweet, response));
            }
        )
        .catch(e => {
            console.log('Got error: ' + e.message); // eslint-disable-line no-console
            render(req, res, tweetPage({error:''},{error: e.message}));
        });

};

const post = (req, res) => {

    const {text, parentTweet} = req.body;

    let request = {
        text,
        type: 'text',
        userId: req.user._id,
        parentTweet
    };

    Server.fetch(Api.postTweet(request))
        .then((response) => {
            if (response.error) {
                res.send("Got error: " + response.error);
            } else {
                res.redirect('/');
            }

        })
        .catch((e)=> {
            res.send("Got error: " + e.message);
        });

};

module.exports = {
    get,
    getTweet,
    post
};
