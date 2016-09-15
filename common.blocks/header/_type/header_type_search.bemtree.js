block('header').mod('type', 'search').content()(function () {
    return [
        {
            elem: 'column',
            elemMods: {align: 'left'},
            content: [
                {
                    block: 'icon',
                    mix: [{block: 'header', elem: 'icon'}],
                    mods: {type: 'search-white'}
                }
            ]
        },
        {
            elem: 'column',
            elemMods: {align: 'center'},
            content: {
                block: 'search'
            }
        },
        {
            elem: 'column',
            elemMods: {align: 'right'},
            content: [

            ]
        }
    ];
});
