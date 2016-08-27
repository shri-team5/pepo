const FacebookStrategy = require('passport-facebook').Strategy;
const VkontakteStrategy = require('passport-vkontakte').Strategy;

const configAuth = require('./config').auth;

const Api = require('./api');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, JSON.stringify(user));
    });

    passport.deserializeUser(function (user, done) {
        done(null, JSON.parse(user));
    });

    passport.use(new FacebookStrategy({

        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL

    }, function (token, refreshToken, profile, done) {
        Auth(profile, done)
    }));

    passport.use(new VkontakteStrategy({

        // pull in our app id and secret from our auth.js file
        clientID: configAuth.vkontakteAuth.clientID,
        clientSecret: configAuth.vkontakteAuth.clientSecret,
        callbackURL: configAuth.vkontakteAuth.callbackURL

    }, function (token, refreshToken, profile, done) {
        Auth(profile, done)
    }));
};

function Auth(profile, done) {


    Api.getUserProfileForAuth(profile.id, profile.provider)
        .then(
            resp => {
                done(null, resp.data);
            }
        )
        .catch(
            e=> {
                if (e.response.status == '404') {
                    let request = {
                        fullName: profile.displayName,
                        [profile.provider]: {
                            id: profile.id
                        }
                    };
                    profile._json.photo && (request.avatarPath = profile._json.photo);
                    done(null, request);
                }
            }
        );
}