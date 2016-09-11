block('page').mod('view', 'feed').content()(function () {
    return [
        {
            block: 'app',
            content: [
                {
                    block: 'header',
                    mix: {block: 'page', elem: 'header'}
                },
                {
                    elem: 'content-wrapper',
                    content: [
                        {
                            block: 'main',
                            mods: {visible: true},
                            mix: {block: 'page', elem: 'main'},
                            content: {
                                block: 'feed',
                                js: {
                                    type: 'feed',
                                    value: 'self'
                                }
                            }
                        },
                        {
                            block: 'new-tweet'
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
