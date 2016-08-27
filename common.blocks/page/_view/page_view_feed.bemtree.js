block('page').mod('view', 'feed').content()(function() {
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
                        // {
                        //     block: 'aside',
                        //     js: true
                        // },
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
