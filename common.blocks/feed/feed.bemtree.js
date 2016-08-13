block('feed').content()(function() {
    return this.data.tweets.map(item => ({
        block: 'tweet-wrapper',
        data: item
    }));
});
