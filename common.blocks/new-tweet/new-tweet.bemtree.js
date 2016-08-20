block('new-tweet').content()(function() {
    return [
        {
            elem: 'input',
            content: {
                block: 'input'
            }
        },
        {
            elem: 'counter'
        }
    ];
});
