block('tweet-toolbar').content()(function() {
    var data = this.ctx.data;
    var currentUser = this.ctx.user || { login: 'nobody' };
    const i18n = this.i18n;

    var toolbar = [
        {
            elem: 'replies-link',
            attrs:{
                href: '/tweets/'+ data._id
            },
            content: i18n('tweet-toolbar', 'replies')
        },
        {
            block: 'reply',
            content: [
                {
                    block: 'icon',
                    mods: { type: 'reply' },
                    mix: { block: 'tweet-toolbar', elem: 'reply' }
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
