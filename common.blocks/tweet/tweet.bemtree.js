block('tweet').content()(function() {
    var data = this.ctx.tweetData;
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
            block: 'username',
            content: data.user.name,
            mix: { block: 'tweet', elem: 'username' }
        }
    ];
});
