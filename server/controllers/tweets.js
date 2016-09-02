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
