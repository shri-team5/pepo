block('navigation').content()(function () {// eslint-disable-line no-undef

    return [
        {
            elem: 'item',
            elemMods: {active: this.data.view === 'feed'},
            attrs: {
                href: '/'
            },
            content: {
                block: 'icon',
                mods: {type: 'home'},
                mix: {block: 'navigation', elem: 'icon'}
            }
        },
        {
            elem: 'item',
            elemMods: {active: this.data.view === 'search'},
            attrs: {
                href: '/search'
            },
            content: {
                block: 'icon',
                mods: {type: 'search'},
                mix: {block: 'navigation', elem: 'icon'}
            }
        },
        {
            elem: 'item',
            elemMods: {active: this.data.view === 'profile'},
            attrs: {
                href: '/profile'
            },
            content: {
                block: 'icon',
                mods: {type: 'profile'},
                mix: {block: 'navigation', elem: 'icon'}
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