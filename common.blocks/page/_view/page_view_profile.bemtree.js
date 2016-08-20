block('page').mod('view', 'profile').content()(function() {
    return [
        {
            block: 'header',
            mix:{block:'page', elem:'header'}
        },
        {
            elem: 'content-wrapper',
            content: [
                {
                    block: 'aside',
                    js:true
                },
                {
                    block: 'main',
                    mix:{block:'page', elem:'main'},
                    content:"Profile"
                }
            ]
        }
    ];
});
