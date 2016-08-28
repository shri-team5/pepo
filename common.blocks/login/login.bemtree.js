block('login').content()(function () {

    return [
        {
            block: 'logo'
        },
        {
            elem: 'title',
            content: "Войти"
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