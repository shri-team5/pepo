block('header').mod('type', 'search').content()(function () {
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
                            block: 'search'
                        }
                    ]
                },
                {
                    elem: 'newTweet',
                    content: [
                        {
                            elem: 'back',
                            content: {
                                block: 'icon',
                                mix: [{block: 'header', elem: 'icon'}],
                                mods: {type: 'back1'}
                            }
                        }
                    ]
                }
            ]
        },
        {
            elem: 'column',
            elemMods: {align: 'center'},
            content: {}
        },
        {
            elem: 'column',
            elemMods: {align: 'right'},
            content: [
                {
                    elem: 'standard',
                    elemMods: {visible: true},
                    content: [
                        {}
                    ]
                },
                {
                    elem: 'newTweet',
                    content: [
                        {
                            elem: 'submit',
                            content: {
                                block: 'icon',
                                mix: [{block: 'header', elem: 'icon'}],
                                mods: {type: 'send2'}
                            }
                        }
                    ]
                }
            ]
        }
    ];
});
