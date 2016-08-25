block('tweet-item').content()(function () {
    const data = this.ctx.data;

    return [
        {
            block: 'userpic',
            src: data.author.avatarPath,
            alt: data.author.username,
            mix: {block: 'tweet-item', elem: 'userpic'}
        },
        {
            elem: 'content',
            content: [
                {
                    elem: 'head',
                    content: [
                        {
                            block: 'username',
                            content: data.author.fullName,
                            mix: {block: 'tweet-item', elem: 'username'}
                        },
                        {
                            elem: 'created',
                            content: {
                                block: 'time',
                                time: data.createdAt,
                                relative: true
                            }
                        }
                    ]
                },
                {
                    block: 'delimiter'
                },
                {
                    elem: 'text',
                    content: data.text
                }
            ]
        }
    ];
});
