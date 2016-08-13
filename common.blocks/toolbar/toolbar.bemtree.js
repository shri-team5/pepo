block('toolbar').content()(function() {
    var data = this.ctx.data;
    var currentUser = this.ctx.user || { login: 'nobody' };

    var toolbar = [
        {
            block: 'like',
            content: [
                {
                    block: 'icon',
                    mods: { type: 'like' },
                    mix: { block: 'toolbar', elem: 'like' }
                },
                {
                    elem: 'count',
                    content: data.likes || ''
                }
            ]
        },
        {
            block: 'icon',
            mods: { type: 'reply' },
            mix: { block: 'toolbar', elem: 'reply' }
        },
        {
            block: 'retweet',
            content: [
                {
                    block: 'icon',
                    mods: { type: 'retweet' },
                    mix: { block: 'toolbar', elem: 'retweet' }
                },
                {
                    elem: 'count',
                    content: data.retweets || ''
                }
            ]
        }
    ];

    (data.user.login === currentUser.login) && toolbar.push({
        block: 'icon',
        mods: { type: 'delete' },
        mix: { block: 'toolbar', elem: 'delete' }
    });

    return toolbar;
});
