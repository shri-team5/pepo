block('tweet-wrapper').content()(function() {
    return [
        {
            block: 'tweet-item',
            data: this.ctx.data
        },
        {
            block: 'tweet-toolbar',
            data: this.ctx.data
        }
    ];
});
