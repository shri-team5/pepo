const render = require('../render').render;

module.exports = function (app, passport) {

    app.get('/auth', function (req, res) {

        render(req, res, {
            view: 'login',
            title: 'Login page',
            meta: {
                description: 'Page description',
                og: {
                    url: 'https://site.com',
                    siteName: 'Site name'
                }
            }
        });

    });

    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook'));


    // // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/auth'
    }));


    // route for facebook authentication and login
    app.get('/auth/vkontakte', passport.authenticate('vkontakte'));


    // handle the callback after facebook has authenticated the user
    app.get('/auth/vkontakte/callback',
        passport.authenticate('vkontakte', {
            successRedirect: '/',
            failureRedirect: '/auth'
        }));

    // route for logging out
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

};
