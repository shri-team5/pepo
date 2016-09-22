block('page').mod('view', 'feed').content()(function () {
    return [
        {
            block: 'app',
            js: this.data.user,
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
                                mods: {
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
