({
    shouldDeps:[
        {
            block: 'icon',
            mods: { type: ['user-menu'] }
        },
        {
            block: 'popup',
            mods: {
                theme: 'islands',
                target: [
                    'anchor',
                    'position'
                ],
                autoclosable: true
            }
        },
        {
            block: 'menu',
            mods: {
                theme: 'islands'
            }
        },
        'menu-item',
        'link'
    ]
})