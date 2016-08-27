
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    res.redirect('/auth/');
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