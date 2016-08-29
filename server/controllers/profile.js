const Render = require('../render'),
    render = Render.render;

const profilePage = require('../pages/profile');

const Api = require('../api');
const Server = require('../api/server');

const get = (req, res) => {
    let {id} = req.params;
    if (!id) id = req.user._id;
    let params = {
        userId: id
    }; 
    
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
const getByUsername = (req, res) => {

    let {username} = req.params;

    let params = {};

    if (!username) username = req.user.username;

    Server.fetch(Api.getUserProfileByUsername(username, params))
        .then(
            response => {
                if (req.params.json) {
                    res.json(response)
                } else {
                    render(req, res, profilePage(response));

                }
            }
        )
        .catch(e => {
            console.log('Gor error: ' + e.message);
            render(req, res, profilePage({error: e.message}, {error: e.message}));
        });

};

module.exports = {
    get,
    getByUsername
};

