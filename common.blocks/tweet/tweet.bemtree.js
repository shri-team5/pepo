block('tweet').content()(function() {

    return [
        {
            block: 'userpic',
            src: '//'+this.ctx.user_avatar,
            alt: this.ctx.user_login,
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
                            content: this.ctx.user_name,
                            mix: { block: 'tweet', elem: 'username' }
                        },
                        {
                            elem: 'created',
                            content: {
                                block:'time',
                                time: this.ctx.created_at,
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
                    content: this.ctx.text
                }
            ]
        }
    ];
});
