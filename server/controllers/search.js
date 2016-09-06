const Render = require('../render'),
    render = Render.render;

const searchPage = require('../pages/search');

const Api = require('../api');
const Server = require('../api/server');

const config = require('../config');

const get = (req, res) => {

    let params = {
        count: config.tweets.initialCount
    };

    Server.fetch(Api.getTweets(params))
        .then(
            response => {
                render(req, res, searchPage(response));
            }
        )
        .catch(e => {
            console.log('Got error: ' + e.message); // eslint-disable-line no-console
            render(req, res, searchPage({error: e.message}));
        });
};
module.exports = {
    get
};
