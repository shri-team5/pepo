block('header').mod('type', 'new').content()(function() {
    return [
        {
            elem: 'column',
            elemMods: { align:'left' },
            content: {
                elem: 'back',
                content: '<'
            }
        },
        {
            elem: 'column',
            elemMods: { align: 'right' },
            content: {
                elem: 'submit',
                content: 'V'
            }
        }
    ];
});
