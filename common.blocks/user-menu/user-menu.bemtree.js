block('user-menu').content()(function () {

    return [
        {
            block: 'icon',
            mods: {type: 'user-menu'},
            mix: {block: 'user-menu', elem: 'button'}
        },
        {
            block: 'popup',
            mods: {theme: 'islands', target: 'anchor', autoclosable: true},
            content: {
                block: 'menu',
                mods: {theme: 'islands', size: 'xl'},
                content: [
                    {
                        block: 'menu-item',
                        mods: {type: 'link'},
                        content: {
                            block: 'link',
                            url: '/settings/',
                            content: 'Настройки'
                        }
                    },
                    {
                        block: 'menu-item',
                        mods: {type: 'link'},
                        content: {
                            block: 'link',
                            url: '/logout/',
                            content: 'Выход'
                        }
                    }
                ]
            }
        }
    ]
});