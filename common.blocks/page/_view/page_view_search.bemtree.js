block('page').mod('view', 'search').content()(function() {
    return [
        {
            block: 'app',
            content: [
                {
                    block: 'header',
                    mix: { block:'page', elem:'header' }
                },
                {
                    elem: 'content-wrapper',
                    content: [
                        {
                            block: 'main',
                            mods : { visible: true },
                            mix: { block:'page', elem:'main' },
                            content: {
                                block: 'feed'
                            }
                        },
                        {
                            block : 'new-tweet'
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
