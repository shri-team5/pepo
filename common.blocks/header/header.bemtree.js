block('header').content()(function () {
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
                            content: {
                                block: 'icon',
                                mix: [{block: 'header', elem: 'icon'}],
                                mods: {type: 'plus'}
                            }
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
                    content: []
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
