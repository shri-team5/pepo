block('page').mod('view', 'settings').content()(function() {
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
                    mods : { visible: true },
                    mix:{block:'page', elem:'main'},
                    content:{
                        block:'profile-edit'
                    }
                }
            ]
        }
    ];
});
