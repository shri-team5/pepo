const Render = require('../render'),
    render = Render.render;

const settingsPage = require('../pages/settings');

const Api = require('../api');
const Server = require('../api/server');

const get = (req, res) => {

    let params = {};

    let id = req.user._id; 

    Server.fetch(Api.getUserProfile(id, params))
        .then(
            response => {
                render(req, res, settingsPage(response));
            }
        )
        .catch(e => {
            console.log('Gor error: ' + e.message);
            render(req, res, settingsPage({error: e.message}));
        });

};

const put = (req, res) => {
    const {username, fullName, description} = req.body;

    const id = req.user._id;
    let request = {
        username,
        fullName,
        description
    };

    Server.fetch(Api.updateUserProfile(id, request))
        .then((response) => {
            if (response.error) {
                res.send("Got error: " + response.error);
            } else {
                res.redirect('/settings/');
            }

        })
        .catch((e)=> {
            res.send("Got error: " + e.message);
        });
};

module.exports = {
    get,
    put
};

