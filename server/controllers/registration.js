const Render = require('../render'),
    render = Render.render;

const regPage = require('../pages/registration');

const Api = require('../api');

const get = (req, res) => {
    render(req, res, regPage({error:"", login:""}));
};

const post = (req, res) => {

    req.user.username = req.body.username;

    Api.postUserProfile(req.user)
        .then(
            resp => {
                req.login(resp.data, function(err) {
                    if (err) return next(err);
                    res.redirect('/')
                });
            }
        )
        .catch(
            e => {
                render(req, res, regPage({error:"Логин уже используется", login:req.body.username}));
            }
        )
};

module.exports = {
    get,
    post
};

