block('feed').content()(function() {

    if(this.data.tweets.error){
        return "Something going wrong :("
    }else{
        return this.data.tweets.data.map(item => ({
            block: 'tweet-wrapper',
            data: item
        }));
    }


});
