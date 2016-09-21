const feed = (tweets, user) => {

    return {
        view: 'feed',
        title: 'Main page',
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

module.exports = feed;
