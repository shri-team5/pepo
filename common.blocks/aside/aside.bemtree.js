block('aside').content()(function () {
    return [
        {
            block: 'menu',
            mods: {theme: 'islands', size: 'xl'},
            content: [
                {
                    block: 'menu-item',
                    mods: {type: 'link'},
                    content: {
                        block: 'link',
                        url: '/profile',
                        content: 'Профиль'
                    }
                },
                {
                    block: 'menu-item',
                    mods: {type: 'link'},
                    content: {
                        block: 'link',
                        url: '/login',
                        content: 'Выход'
                    }
                }
            ]
        }
    ]
})