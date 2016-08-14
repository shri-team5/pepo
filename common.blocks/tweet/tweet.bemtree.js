block('tweet').content()(function() {
    var data = this.ctx.tweetData;

    console.log(new Date(data.created_at));
    return [
        {
            block: 'userpic',
            attrs: {
                src: '//'+data.user.avatar,
                alt: data.user.login
            },
            mix: { block: 'tweet', elem: 'userpic' }
        },
        {
            elem: 'content',
            content:[
                {
                    block: 'username',
                    content: data.user.name,
                    mix: { block: 'tweet', elem: 'username' }
                },
                {
                    elem: 'text',
                    content: data.text
                },
                {
                    elem: 'created',
                    content: (new Date(data.created_at)).toString()
                }
            ]
        }
    ];
});
