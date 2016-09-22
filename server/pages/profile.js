const profile = (profile, tweets, user) => {

    return {
        view: 'profile',
        title: 'Profile page',
        profile: profile,
        tweets: tweets,
        user: user,
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        }
    }
};

module.exports = profile;
