block('login').content()(function () {
    var i18n = this.i18n;

    return [
        {
            block: 'logo'
        },
        {
            elem: 'title',
            content: i18n('login', 'enter')
        },
        {
            elem: 'soc-networks',
            content: [
                {
                    elem:'link',
                    attrs: {
                        href: "/auth/vkontakte"
                    },
                    content:{
                        block: 'icon',
                        mix: {block: 'login', elem: 'soc'},
                        mods: {type: 'vk'}
                    }

                },
                {
                    elem:'link',
                    attrs: {
                        href: "/auth/facebook"
                    },
                    content:{
                        block: 'icon',
                        mix: {block: 'login', elem: 'soc'},
                        mods: {type: 'facebook'}
                    }

                }
            ]
        }
    ]
})
