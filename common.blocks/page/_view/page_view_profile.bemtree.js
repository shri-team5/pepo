block('page').mod('view', 'profile').content()(function () {

    return [
        {
            block: 'app',
            js: this.data.user,
            content: [
                {
                    block: 'header',
                    mods: {
                        type: 'profile'
                    },
                    mix: {block: 'page', elem: 'header'}
                },
                {
                    elem: 'content-wrapper',
                    content: [
                        {
                            block: 'main',
                            mods: {visible: true},
                            mix: {block: 'page', elem: 'main'},
                            content: [
                                {
                                    block: 'userinfo'
                                },
                                {
                                    block: 'feed',
                                    mods: {
                                        type: 'user',
                                        value: this.data.profile.data._id
                                    }
                                }
                            ]
                        },
                        {
                            block: 'new-tweet'
                        },
                        {
                            block: 'navigation'
                        }
                    ]
                }
            ]
        }
    ];
});
