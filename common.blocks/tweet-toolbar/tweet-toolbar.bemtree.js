block('tweet-toolbar').content()(function () {
    var data = this.ctx.data;
    var currentUser = this.ctx.user || {login: 'nobody'};
    const i18n = this.i18n;

    var toolbar = [
        {
            elem: 'left',
            content: {
                block: 'tweet-location',
                location: data.location
            }
        },
        {
            elem: 'actions',
            content: [
                data.replies &&
                {
                    elem: 'replies-link',
                    attrs: {
                        href: '/tweets/' + data._id
                    },
                    content: data.replies
                },
                {
                    block: 'reply',
                    content: [
                        {
                            block: 'icon',
                            mods: {type: 'reply'},
                            mix: {block: 'tweet-toolbar', elem: 'reply'}
                        }
                    ]
                }
            ]
        }
    ];

    (data.author.username === currentUser.login) && toolbar.push({
        block: 'icon',
        mods: {type: 'delete'},
        mix: {block: 'tweet-toolbar', elem: 'delete'}
    });

    return toolbar;
});
