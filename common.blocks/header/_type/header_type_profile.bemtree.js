block('header').mod('type', 'profile').content()(function () {
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
                            elem: 'plus',
                            content: '+'
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
            elemMods: {align: 'right'},
            content: [
                {
                    elem: 'standard',
                    elemMods: {visible: true},
                    content: [
                        {
                            block: 'user-menu'
                        }
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
