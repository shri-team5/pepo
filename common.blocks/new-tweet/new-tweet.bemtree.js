block('new-tweet').content()(function() {
    var i18n = this.i18n;
    return [
        {
            block: 'attach',
            mods: { theme: 'islands', size: 'm' },
            name: 'image',
            button: {
                block: 'button',
                text: i18n('new-tweet', 'picture')
            }
        },
        {
            block: 'textarea',
            mix: [ { block: 'new-tweet', elem: 'input' } ],
            name: 'text',
            maxLength: 140,
            mods: { theme : 'islands', size : 'xl', width : 'available' },
            placeholder: i18n('new-tweet', 'text')
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
