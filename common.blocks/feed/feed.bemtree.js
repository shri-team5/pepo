block('feed').content()(function() {

    const {tweets} = this.data;

    if (tweets.error) {
        return 'Something going wrong :(';
    } else {
        return tweets.data.map(item => ({
            block: 'tweet',
            data: item
        }));
    }
});
