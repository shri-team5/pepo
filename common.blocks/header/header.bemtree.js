block('header').content()(function() {
    return [
        {
            elem: 'column',
            elemMods: { align:'left' },
            content: [
                {
                    elem: 'plus',
                    elemMods: { visible: true },
                    content: '+'
                },
                {
                    elem: 'back',
                    elemMods: { visible: false },
                    content: {
                        block: 'icon',
                        mix : [ { block : 'header', elem: 'icon' } ],
                        mods : { type : 'back1' },
                    }
                }
            ]
        },
        {
            elem: 'column',
            elemMods: { align:'right' },
            content: [
                {
                    elem: 'burger',
                    elemMods: { visible: true },
                    content: {
                        block: 'burger'
                    }
                },
                {
                    elem: 'submit',
                    elemMods: { visible: false },
                    content: {
                        block: 'icon',
                        mix : [ { block : 'header', elem: 'icon' } ],
                        mods : { type : 'send2' },
                    }
                }
            ]
        }
    ];
});
