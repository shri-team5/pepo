block('header').content()(function() {
    return [
        {
            elem: 'column',
            elemMods: { align:'left' },
            content: {
                elem: 'plus',
                content: '+'
            }
        },
        {
            elem: 'column',
            elemMods:{
                align:'right'
            },
            content: {
                block:'burger'
            }
        }
    ];
});
