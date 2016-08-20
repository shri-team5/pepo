block('tweet').content()(function() {
    const data = this.ctx.data;

    return [
        {
            block: 'userpic',
            src: data.author.avatarPath,
            alt: data.author.username,
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
                            content: data.author.fullName,
                            mix: { block: 'tweet', elem: 'username' }
                        },
                        {
                            elem: 'created',
                            content: {
                                block:'time',
                                time: data.createdAt,
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
