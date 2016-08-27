block('tweet').content()(function() {

    return [
        {
            elem:'item',
            content:[
                {
                    block: 'tweet-item',
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
