block('userinfo').content()(function () { // eslint-disable-line no-undef

    const profile = this.data.profile;

    if(profile.error){

        return {
            elem: 'info',
            content:[
                {
                    elem:'description',
                    content: "Something going wrong :("
                }
            ]
        };
    }else{
        return [
            {
                elem: 'row',
                content: [
                    {
                        block: 'userpic',
                        src: profile.data.avatarPath,
                        alt: profile.data.username,
                        mix: { block: 'userinfo', elem: 'userpic' }
                    },
                    {
                        elem: 'info',
                        content:[
                            {
                                elem:'fullname',
                                content: profile.data.fullName
                            },
                            {
                                elem:'username',
                                content: "@"+profile.data.username
                            },
                            {
                                elem:'description',
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
                                data: {
                                    number: '12',
                                    text: 'читают'
                                },
                                mix: {block: 'userinfo', elem: 'counter'}
                            },
                            {
                                block: 'counter',
                                data: {
                                    number: '53',
                                    text: 'читает'
                                },
                                mix: {block: 'userinfo', elem: 'counter'}
                            },
                            {
                                block: 'counter',
                                data: {
                                    number: '284',
                                    text: 'написал'
                                },
                                mix: {block: 'userinfo', elem: 'counter'}
                            }
                        ]
                    }
                ]
            }
        ]
    }


});