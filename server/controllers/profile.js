const Render = require('../render'),
    render = Render.render;

const profilePage = require('../pages/profile');

const Api = require('../api');
const Server = require('../api/server');


const isDev = process.env.NODE_ENV === 'development';


const get = (req, res) => {

    let {id} = req.params;

    let params = {
        userId: req.user._id
    };

    if(!id) id = req.user._id;

    Server.fetchAsync([Api.getUserProfile(id, params), Api.getTweets(params)])
        .then(
            responses => {
                render(req, res, profilePage(responses[0], responses[1]));
            }
        )
        .catch(e => {
            console.log('Gor error: ' + e.message);
            render(req, res, profilePage({error: e.message}, {error: e.message}));
        });

};

const post = (req, res) => {
    res.send('Got post /profile')
};

module.exports = {
    get,
    post
};

