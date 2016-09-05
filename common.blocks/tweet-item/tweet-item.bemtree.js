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
                            href: "/profile/" + data.author._id,
                            title: '@' + data.author.username,
                            mix: {block: 'tweet-item', elem: 'username'}
                        },
                        {
                            elem: 'created',
                            content: {
                                block: 'time',
                                time: data.createdAt,
                                relative: true
                            }
                        },
                        {
                            elem: 'reply',
                            attrs: {
                                href: '/tweets/' + data.parentTweet
                            }
                        }
                    ]
                },
                {
                    elem: 'text',
                    content: data.text
                },
                data.image &&
                {
                    elem: 'image',
                    attrs: {
                        src: data.image
                    }
                }
            ]
        }
    ];
});
