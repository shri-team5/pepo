const Render = require('../render'),
    render = Render.render;

const searchPage = require('../pages/search');

const Api = require('../api');
const Server = require('../api/server');

const config = require('./config');

const get = (req, res) => {

    let params = {
        count: config.initialCount
    };
    const isQueryParamsExist = req.query.offset || req.query.count;

    if (isQueryParamsExist) {
        params.offset = req.query.offset;
        params.count = req.query.count;
    }

    Server.fetch(Api.searchTweets(params))
        .then(
            response => {
                if (isQueryParamsExist) {
                    render(req, res, null, response.data.map(item => (
                        { block: 'tweet', data: item }
                    )));
                } else {
                    render(req, res, searchPage(response));
                }
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
