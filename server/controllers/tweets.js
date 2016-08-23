const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');

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
            console.log('Got error: ' + e.message); // eslint-disavle-line no-console
            render(req, res, feedPage({error: e.message}));
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
    post
};

