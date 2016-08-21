block('userinfo').content()(()=>{

    return [
        {
            block: 'userpic',
            src: "http://placehold.it/96x96",
            alt: "avatar",
            mix: { block: 'userinfo', elem: 'userpic' }
        },
        {
            elem: 'info',
            content:[
                {
                    elem:'fullname',
                    content: "Вася Пупкин"
                },
                {
                    elem:'username',
                    content: "@superuser"
                },
                {
                    elem:'description',
                    content: "Я программист"
                }
            ]
        }
    ]

});