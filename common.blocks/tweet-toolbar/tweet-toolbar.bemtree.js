block('tweet-toolbar').content()(function() {
    var data = this.ctx.data;
    var currentUser = this.ctx.user || { login: 'nobody' };

    var toolbar = [
        {
            block: 'reply',
            content: [
                {
                    block: 'icon',
                    mods: { type: 'reply' },
                    mix: { block: 'tweet-toolbar', elem: 'reply' }
                },
                {
                    elem: 'count',
                    content: data.reply || ''
                }
            ]
        }
    ];

    (data.author.username === currentUser.login) && toolbar.push({
        block: 'icon',
        mods: { type: 'delete' },
        mix: { block: 'tweet-toolbar', elem: 'delete' }
    });

    return toolbar;
});
