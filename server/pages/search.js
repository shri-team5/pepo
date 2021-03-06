const search = (tweets, user) => {

    return {
        view: 'search',
        title: 'Search page',
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

module.exports = search;
