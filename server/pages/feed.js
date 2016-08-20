const feed = (tweets) => {

    return {
        view: 'feed',
        title: 'Main page',
        tweets: tweets,
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
