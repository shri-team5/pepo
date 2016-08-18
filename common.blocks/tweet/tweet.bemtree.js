block('tweet').content()(function() {
    var data = this.ctx.tweetData;
    var moment = require('moment')
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
                            content: moment(data.created_at).format('MMMM Do YYYY, hh:mm:ss')
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
