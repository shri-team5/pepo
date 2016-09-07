
const config = require('./config'),
    isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'grimfri';

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    if(isDev){
        req.login(config.testUser, function(err) {
            if (err) return next(err);
            return next();
        });
    }else{
        res.redirect('/auth/');
    }

}

function isRegisteredIn(req, res, next) {

    if (req.isAuthenticated() && req.user.username)
        return next();

    res.redirect('/registration/');
}


module.exports = {
    isLoggedIn,
    isRegisteredIn
};
