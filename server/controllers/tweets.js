const Render = require('../render'),
    render = Render.render;

const feedPage = require('../pages/feed');
const tweetPage = require('../pages/tweet');

const Api = require('../api');
const Server = require('../api/server');

const config = require('./config');
const configApi = require('../config');

const formdata = require('form-data');

var http = require('http');

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

    // let request = {
    //     text,
    //     type: 'text',
    //     userId: req.user._id,
    //     parentTweet
    // };
    //
    console.log(req.file);

    var request = http.request({
      method: 'post',
      host: "http://" + config.backendHost + ':' + config.backendPort,
      path: '/tweets',
      headers: form.getHeaders()
    });

    let form = new formdata();

    form.append('text', text);
    form.append('type', 'text');
    form.append('userId', req.user._id);
    form.append('parentTweet', parentTweet);
    form.append('image', req.file.buffer);

    // form.submit("http://" + config.backendHost + ':' + config.backendPort + '/tweets', function(err, response) {
    //  // res – response object (http.IncomingMessage)  //
    //     res.send('ok');
    //     console.log(response);
    // });

    form.pipe(request);

    request.on('response', function(res) {
      console.log(res.statusCode);
    });

    // console.log(req.file);

    // res.send('ok');

    // Server.fetch(Api.postTweet(request))
    //     .then((response) => {
    //         if (response.error) {
    //             res.send("Got error: " + response.error);
    //         } else {
    //             res.redirect('/');
    //         }
    //
    //     })
    //     .catch((e)=> {
    //         res.send("Got error: " + e.message);
    //     });

};

module.exports = {
    get,
    getTweet,
    post
};
