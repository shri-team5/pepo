block('new-tweet').content()(function() {
    return [
        {
            block: 'attach',
            mods: { theme: 'islands', size: 'm' },
            name: 'image',
            button: {
                block: 'button',
                text: 'Картинка'
            }
        },
        {
            block: 'textarea',
            mix: [ { block: 'new-tweet', elem: 'input' } ],
            name: 'text',
            maxLength: 140,
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
