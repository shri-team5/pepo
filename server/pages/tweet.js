const tweet = (parentTweet, tweets) => {

    return {
        view: 'tweet',
        title: 'Tweet page',
        tweets: tweets,
        parentTweet: parentTweet,
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        }
    }
};

module.exports = tweet;
