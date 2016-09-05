module.exports = {
    staticFolder: 'static',
    defaultPort: 3000,
    cacheTTL: 100,
    sessionSecret: 'ASD',
    
    backendHost: 'localhost',
    backendPort: 4000,
    backendTimeout: 1000,

    tweets:{
        initialCount: 15
    },
    
    testUser:{
        _id: '57cdd70f9c4804231abfc86d',
        username: 'grimfri'
    },

    auth:{
        facebookAuth : {
            clientID      : 1733169776932912, // your App ID
            clientSecret  : '51a16703cd414945dbbdedf984e05e2b', // your App Secret
            callbackURL   : 'http://localhost:3000/auth/facebook/callback'
        },
        vkontakteAuth : {
            clientID      : 5607195, // your App ID
            clientSecret  : 'xmhbcYmU1c3gxLPwfTaK', // your App Secret
            callbackURL   : 'http://localhost:3000/auth/vkontakte/callback'
        }
    }
};
