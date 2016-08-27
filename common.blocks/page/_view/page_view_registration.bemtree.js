block('page').mod('view', 'registration').content()(function () {
    return [
        {
            elem: 'content-wrapper',
            content: [
                {
                    elem: 'registration',
                    content: {
                        block: 'register'
                    }
                }
            ]
        }
    ];
});
