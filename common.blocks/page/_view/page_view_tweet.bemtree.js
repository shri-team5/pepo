block('page').mod('view', 'tweet').content()(function () { // eslint-disable-line no-undef

    const {parentTweet} = this.data;

    return [
        {
            block: 'app',
            content: [
                {
                    block: 'header',
                    mods:{type:'replies'},
                    mix: {block: 'page', elem: 'header'}
                },
                {
                    elem: 'content-wrapper',
                    content: [
                        {
                            block: 'main',
                            mods: {visible: true},
                            mix: {block: 'page', elem: 'main'},
                            content: [
                                {
                                    block: 'tweet',
                                    data: parentTweet.data,
                                    mods: {parent: true}
                                },
                                {
                                    block: 'feed',
                                    js:{
                                        type:'tweet',
                                        value: parentTweet.data._id
                                    }
                                }
                            ]
                        },
                        {
                            block: 'navigation'
                        }
                    ]
                }
            ]
        }
    ];
});
