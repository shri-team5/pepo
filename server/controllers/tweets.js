const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');
const tweetPage = require('../pages/tweet');

const Api = require('../api');
const Server = require('../api/server');

const isDev = process.env.NODE_ENV === 'development';

const get = (req, res) => {

    let params = {
        userId: req.get('userId')
    };
    if (isDev) {
        params['userId'] = "57b86709eb4b20a0550e09a4";
    }

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

    let params = {
        userId: req.get('userId')
    };
    if (isDev) {
        params['userId'] = "57b86709eb4b20a0550e09a4";
    }

    Server.fetch(Api.getTweets(params))
        .then(
            response => {

                const parentTweet = {
                    _id: '57bf2a4aff3100353e28886d',
                    updatedAt: '2016-08-25T17:26:34.467Z',
                    createdAt: '2016-08-25T17:26:34.467Z',
                    author: {
                        _id: '57b86709eb4b20a0550e09a4',
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

    const {text} = req.body;

    let request = {
        text,
        type: 'text',
        userId: req.get('userId')
    };

    if (isDev) {
        request['userId'] = '57b86709eb4b20a0550e09a4'
    }

    Server.fetch(Api.postTweet(request))
        .then((response) => {
            if (response.error) {
                res.send("Got error: " + response.error);
            } else {
                get(req, res);
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

