block('userinfo').content()(function () { // eslint-disable-line no-undef

    const {profile, user} = this.data,
        i18n = this.i18n;

    if (profile.error) {

        return {
            elem: 'info',
            content: [
                {
                    elem: 'description',
                    content: i18n('userinfo', 'profile-error')
                }
            ]
        };
    } else {
        return [
            {
                elem: 'row',
                content: [
                    {
                        block: 'userpic',
                        src: profile.data.avatarPath,
                        alt: profile.data.username,
                        mix: {block: 'userinfo', elem: 'userpic'}
                    },
                    {
                        elem: 'info',
                        content: [
                            {
                                elem: 'fullname',
                                attrs: {
                                    href: "/profile/" + profile.data._id
                                },
                                content: profile.data.fullName
                            },
                            {
                                elem: 'username',
                                content: "@" + profile.data.username
                            },
                            {
                                elem: 'description',
                                content: profile.data.description
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'row',
                content: [
                    {
                        elem: 'counters',
                        content: [
                            {
                                block: 'counter',
                                mods : { type : 'followers' },
                                data: {
                                    number: profile.data.subscribersNumber || 0,
                                    text: i18n('userinfo', 'followers')
                                },
                                mix: {block: 'userinfo', elem: 'counter'}
                            },
                            {
                                block: 'counter',
                                data: {
                                    number: profile.data.subscriptions.length || 0,
                                    text: i18n('userinfo', 'following')
                                },
                                mix: {block: 'userinfo', elem: 'counter'}
                            },
                            {
                                block: 'counter',
                                data: {
                                    number: profile.data.tweetsNumber || 0,
                                    text: i18n('userinfo', 'writes')
                                },
                                mix: {block: 'userinfo', elem: 'counter'}
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'row',
                content: [
                    {
                        elem: 'subscribe',
                        content: {
                            block: 'subscribe',
                            mods: {
                                subscribed: user.data.subscriptions.indexOf(profile.data._id) >= 0,
                                hidden: user.data._id == profile.data._id
                            },
                            attrs: {
                                "data-user_id": profile.data._id
                            }
                        }
                    }
                ]
            }
        ]
    }


});
