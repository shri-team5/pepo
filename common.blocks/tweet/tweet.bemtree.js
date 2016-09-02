block('tweet').content()(function() {
    
    return [
        {
            elem:'item',
            content:[
                {
                    block: 'tweet-item',
                    mods:{
                      reply: this.ctx.data.parentTweet && this.ctx.data.parentTweet.length > 0
                    },
                    data: this.ctx.data
                },
                {
                    block: 'tweet-toolbar',
                    data: this.ctx.data
                }
            ]
        }
    ];
});
