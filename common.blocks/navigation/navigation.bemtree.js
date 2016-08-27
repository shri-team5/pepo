block('navigation').content()(function () {// eslint-disable-line no-undef

    return[
        {
            elem:'item',
            attrs:{
                href:'/'
            },
            content:{
                block: 'icon',
                mods: { type: 'home' },
                mix: {block:'navigation', elem:'icon'}
            }
        },
        {
            elem:'item',
            attrs:{
                href:'/search'
            },
            content:{
                block: 'icon',
                mods: { type: 'search' },
                mix: {block:'navigation', elem:'icon'}
            }
        },
        {
            elem:'item',
            attrs:{
                href:'/profile'
            },
            content:{
                block: 'icon',
                mods: { type: 'profile' },
                mix: {block:'navigation', elem:'icon'}
            }
        }
        // {
        //     elem:'item',
        //     content:{
        //         block: 'icon',
        //         content: '+',
        //     }
        // }
    ]
});