block('tweet').content()(function() {
    var data = this.ctx.tweetData;

    return [
        {
            block: 'userpic',
            src: '//'+data.user.avatar,
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
                            content: (new Date(data.created_at)).toString()
                        }
                    ]
                },
                {
                    elem: 'text',
                    content: data.text
                }
            ]
        }
    ];
});
