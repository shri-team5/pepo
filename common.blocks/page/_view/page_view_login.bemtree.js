block('page').mod('view', 'login').content()(function () {
    return [
        {
            elem: 'content-wrapper',
            content: [
                {
                    elem: 'login',
                    content: {
                        block: 'login'
                    }
                }
            ]
        }
    ];
});
