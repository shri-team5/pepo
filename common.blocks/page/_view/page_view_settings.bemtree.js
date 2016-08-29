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
                    block: 'main',
                    mods : { visible: true },
                    mix:{block:'page', elem:'main'},
                    content:{
                        block:'profile-edit',
                        data: this.data
                    }
                },
                {
                    block: 'navigation'
                }
            ]
        }
    ];
});
