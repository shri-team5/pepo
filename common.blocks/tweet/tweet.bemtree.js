block('tweet').content()(function() {
    var data = this.ctx.tweetData;
    var moment = require('moment');
    moment.locale('ru');
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
                            content: moment(this.ctx.created_at).fromNow()
                            // content: moment(this.ctx.created_at).format('DD-MM-YYYY hh:mm:ss')
                        }
                    ]
                },
                {
                    elem: 'text',
                    content: this.ctx.text
                }
            ]
        }
    ];
});
