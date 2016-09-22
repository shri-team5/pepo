module.exports = {
    staticFolder: 'static',
    defaultPort: 3000,
    cacheTTL: 100,
    sessionSecret: 'ASD',
    socketPort: 8086,

    backendHost: 'localhost',
    backendPort: 4000,
    backendTimeout: 10000,

    tweets: {
        initialCount: 15
    },

    langs: ['ru', 'en'],

    testUser: {
        _id: '57dea910cf6f89552c8993d0',
        username: 'basilred'
    },

    auth: {
        facebookAuth: {
            clientID: 1733169776932912, // your App ID
            clientSecret: '51a16703cd414945dbbdedf984e05e2b', // your App Secret
            callbackURL: 'http://localhost:3000/auth/facebook/callback'
        },
        vkontakteAuth: {
            clientID: 5607195, // your App ID
            clientSecret: 'xmhbcYmU1c3gxLPwfTaK', // your App Secret
            callbackURL: 'http://localhost:3000/auth/vkontakte/callback'
        }
    }
};
