const Render = require('../render'),
    render = Render.render;

const settingsPage = require('../pages/settings');

const Api = require('../api');
const Server = require('../api/server');

const config = require('../config');
const formdata = require('form-data');

var fs = require('fs');
var http = require('http');

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

    let form = new formdata();
    form.append('username', username);
    form.append('fullName', fullName);
    form.append('description', description);
    req.file && form.append('image', fs.createReadStream(req.file.path));


    var request = http.request({
        method: 'put',
        host: config.backendHost,
        port: config.backendPort,
        path: '/users/'+id,
        headers: form.getHeaders()
    });

    form.pipe(request);

    request.on('response', function (response) {
        res.redirect('/settings/');
    });
};

module.exports = {
    get,
    put
};

