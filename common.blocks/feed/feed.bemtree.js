block('feed').content()(function() {
    //var data =



    return this.data.tweets.map(function (item) {
        return {
            block:'tweet',
            tweetData: item

        };
    });
});
