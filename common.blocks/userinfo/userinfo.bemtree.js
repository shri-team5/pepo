block('userinfo').content()(function() { // eslint-disable-line no-undef

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
                block: 'userpic',
                src: profile.avatarPath,
                alt: profile.username,
                mix: { block: 'userinfo', elem: 'userpic' }
            },
            {
                elem: 'info',
                content:[
                    {
                        elem:'fullname',
                        content: profile.fullName
                    },
                    {
                        elem:'username',
                        content: "@"+profile.username
                    },
                    {
                        elem:'description',
                        content: profile.description
                    }
                ]
            }
        ]
    }


});