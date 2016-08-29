block('header').mod('type', 'settings').content()(function () {
    return [
        {
            elem: 'column',
            elemMods: {align: 'left'},
            content: [
                {
                    elem: 'standard',
                    elemMods: {visible: true},
                    content: [
                        {
                            elem: 'link',
                            attrs: {href: '/profile/'},
                            content: [
                                {
                                    block: 'icon',
                                    mix: [{block: 'header', elem: 'icon'}],
                                    mods: {type: 'back1'}
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
