block('new-tweet').content()(function() {
    return [
        {
            block: 'textarea',
            mix: [ { block: 'new-tweet', elem: 'input' } ],
            name: 'text',
            mods: { theme : 'islands', size : 'xl', width : 'available' },
            placeholder: 'Текст твита'
        },
        {
            elem: 'counter'
        }
    ];
});
