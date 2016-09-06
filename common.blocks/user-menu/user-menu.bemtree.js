block('user-menu').content()(function () {
    const i18n = this.i18n;

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
                            content: i18n('user-menu', 'settings')
                        }
                    },
                    {
                        block: 'menu-item',
                        mods: {type: 'link'},
                        content: {
                            block: 'link',
                            url: '/logout/',
                            content: i18n('user-menu', 'exit')
                        }
                    }
                ]
            }
        }
    ]
});
