block('tweet-wrapper').content()(function() {
    return [
        {
            block: 'tweet',
            data: this.ctx.data
        },
        {
            block: 'toolbar',
            data: this.ctx.data
        }
    ];
});
