block('page').mod('view', 'profile').content()(function () {
    return [
        {
            block:'app',
            content:[
                {
                    block: 'header',
                    mix: {block: 'page', elem: 'header'}
                },
                {
                    elem: 'content-wrapper',
                    content: [
                        {
                            block: 'aside',
                            js: true
                        },
                        {
                            block: 'main',
                            mods : { visible: true },
                            mix: {block: 'page', elem: 'main'},
                            content: [
                                {
                                    block: 'userinfo'
                                },
                                {
                                    block: 'feed'
                                }
                            ]
                        },
                        {
                            block : 'new-tweet'
                        }
                    ]
                }
            ]
        }
    ];
});
