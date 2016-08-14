block('feed').content()(function() {

    return this.data.tweets.map(function (item) {
        return {
            block:'tweet',
            tweetData: item,
            mix:{block:'feed', elem:'tweet'}

        };
    });
});
