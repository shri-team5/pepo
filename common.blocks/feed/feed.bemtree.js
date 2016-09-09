block('feed').content()(function() {

    const {tweets} = this.data,
        i18n = this.i18n;

    if (tweets.error) {
        console.log(tweets.error);
        return i18n('feed', 'error');
    } else if(tweets.data.length == 0){
        return i18n('feed', 'empty');
    } else{
        return tweets.data.map(item => ({
            block: 'tweet',
            data: item
        }));
    }
});
