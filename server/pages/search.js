const search = (tweets) => {

    return {
        view: 'search',
        title: 'Search page',
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

module.exports = search;
