block('new-tweet').content()(function() {
    return [
        {
            block: 'textarea',
            mix: [ { block: 'new-tweet', elem: 'input' } ],
            name: 'text',
            attrs:{required: true},
            mods: { theme : 'islands', size : 'xl', width : 'available' },
            placeholder: 'Текст твита'
        },
        {
            elem: 'counter'
        },
        {
            block: 'new-tweet-reply',
            tag: 'input',
            attrs: { name: 'parentTweet', type: 'hidden' }
        }
    ];
});
