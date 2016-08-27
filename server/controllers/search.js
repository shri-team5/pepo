const Render = require('../render'),
    render = Render.render;

const searchPage = require('../pages/search');

const Api = require('../api');
const Server = require('../api/server');


const get = (req, res) => {

    let params = {};

    Server.fetch(Api.searchTweets(params))
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

