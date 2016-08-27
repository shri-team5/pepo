block('login').content()(function () {

    return [
        {
            elem: 'title',
            content: "Авторизация"
        },
        {
            elem: 'soc-networks',
            content: [
                {
                    elem: 'vk',
                    mix: {elem: 'soc'},
                    attrs: {
                        href: "/auth/vkontakte"
                    }

                },
                {
                    elem: 'fb',
                    mix: {elem: 'soc'},
                    attrs: {
                        href: "/auth/facebook"
                    }

                }
            ]
        }
    ]
})