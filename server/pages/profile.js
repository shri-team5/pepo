const profile = (tweets) => {

    return {
        view: 'profile',
        title: 'Profile page',
        tweets:tweets,
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
