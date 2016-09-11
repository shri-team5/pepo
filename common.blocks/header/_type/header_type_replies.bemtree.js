block('header').mod('type', 'replies').content()(function () {
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
                            elem: 'history-back',
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
        },
        {
            elem: 'column',
            elemMods: {align: 'center'},
            content: {
                elem: 'name',
                content: 'Pepo'
            }
        },
        {
            elem: 'column',
            elemMods: {align: 'right'},
            content: {

            }
        }
    ];
});
