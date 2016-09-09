block('tweet-toolbar').content()(function() {
    var data = this.ctx.data;
    var currentUser = this.ctx.user || { login: 'nobody' };
    const i18n = this.i18n;

    var toolbar = [
        {
            elem:'left',
            content:{
                elem: 'location',
                content: [
                    {
                        block: 'icon',
                        mods: { type: 'location' },
                        mix: { block: 'tweet-toolbar', elem: 'location-icon' }
                    },
                    {
                        elem: 'location-link',
                        content: data.location,
                        attrs:{
                            href:"https://yandex.ru/maps/?mode=whatshere&whatshere%5Bpoint%5D="+data.location+"&whatshere%5Bzoom%5D=13",
                            target:"_blank"
                        }
                    }
                ]
            }
        },
        {
            elem: 'actions',
            content:[
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
