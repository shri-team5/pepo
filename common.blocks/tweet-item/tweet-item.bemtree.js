block('tweet-item').content()(function () {
    const data = this.ctx.data; 
    const emojione = require('emojione');

    return [
        {
            elem: 'profile-link',
            href: '/profile/' + data.author._id,
            title: '@' + data.author.username,
            content: {
                block: 'userpic',
                src: data.author.avatarPath,
                alt: data.author.username,
                mix: {block: 'tweet-item', elem: 'userpic'}
            }
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
                            href: '/profile/' + data.author._id,
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
                    content: emojione.toImage(data.text.replace(/\n/g, '<br>'))
                },

                data.image && {
                    elem: 'image',
                    attrs: {
                        src: data.image
                    }
                },

                data.link && {
                    block: 'link-preview',
                    data: data.link
                }
            ]
        }
    ];
});
