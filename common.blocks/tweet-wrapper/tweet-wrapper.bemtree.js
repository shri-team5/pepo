block('tweet-wrapper').content()(function() {
    return [
        {
            block: 'tweet-item',
            data: this.ctx.data
        },
        {
            block: 'toolbar',
            data: this.ctx.data
        }
    ];
});
