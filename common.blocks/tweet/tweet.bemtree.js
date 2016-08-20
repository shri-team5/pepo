block('tweet').content()(function() {
    const data = this.ctx.data;

    return [
        {
            block: 'userpic',
            src: '//' + data.user.avatar,
            alt: data.user.login,
            mix: { block: 'tweet', elem: 'userpic' }
        },
        {
            elem: 'content',
            content:[
                {
                    elem:'head',
                    content:[
                        {
                            block: 'username',
                            content: data.user.name,
                            mix: { block: 'tweet', elem: 'username' }
                        },
                        {
                            elem: 'created',
                            content: {
                                block:'time',
                                time: data.created_at,
                                relative: true
                            }
                        }
                    ]
                },
                {
                    elem:'delitemer'
                },
                {
                    elem: 'text',
                    content: data.text
                }
            ]
        }
    ];
});
