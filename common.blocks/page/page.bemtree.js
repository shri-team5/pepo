block('page').content()(function() {
    return [
        {
            block: 'header'
        },
        {
            block: 'body',
            content: [
                {
                    block: 'header',
                    content: {
                        block : 'bla'
                    }
                },
                {
                    block: 'header'
                }
            ]
        },
        {
            block : 'tweet'
        },
        {
            block: 'footer'
        }
    ];
});
