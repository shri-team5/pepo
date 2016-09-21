module.exports = {
    staticFolder: 'static',
    defaultPort: 3000,
    cacheTTL: 100,
    sessionSecret: 'GHJKNBFGHJHKJGHHJJLKHJG',
    socketPort: 8085,

    backendHost: '188.166.17.158',
    backendPort: 8080,
    backendTimeout: 1000,

    tweets: {
        initialCount: 15
    },

    langs: ['ru', 'en'],

    auth: {
        facebookAuth: {
            clientID: 1733169776932912, // your App ID
            clientSecret: '51a16703cd414945dbbdedf984e05e2b', // your App Secret
            callbackURL: 'http://pepos.pw/auth/facebook/callback'
        },
        vkontakteAuth: {
            clientID: 5607195, // your App ID
            clientSecret: 'xmhbcYmU1c3gxLPwfTaK', // your App Secret
            callbackURL: 'http://pepos.pw/auth/vkontakte/callback'
        }
    }
};
