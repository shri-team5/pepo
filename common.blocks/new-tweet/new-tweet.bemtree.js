block('new-tweet').content()(function () {
    var i18n = this.i18n;
    return [
        {
            elem: 'input-wrap',
            attrs: {
                'data-counter': 140
            },
            content: {
                block: 'textarea',
                mix: [{block: 'new-tweet', elem: 'input'}],
                name: 'text',
                maxLength: 140,
                mods: {theme: 'islands', size: 'xl', width: 'available'},
                placeholder: i18n('new-tweet', 'text')
            }
        },
        {
            elem: 'link-preview',
            content: {
                block: 'link-preview'
            }
        },
        {
            elem: 'actions',
            content: [
                {
                    block: 'attach',
                    mods: {theme: 'islands', size: 'm'},
                    name: 'image',
                    mix: {block: 'new-tweet', elem: 'attach'},
                    button: {
                        block: 'button',
                        text: i18n('new-tweet', 'picture')
                    }
                }
            ]
        },
        {
            elem: 'actions',
            content: [
                {
                    block: 'location',
                    mix: {block: 'new-tweet', elem: 'location'}
                }
            ]
        },
        {
            block: 'new-tweet-reply',
            tag: 'input',
            attrs: {name: 'parentTweet', type: 'hidden'}
        },
        {
            block: 'create-tweet',
            mods: {visible: true},
            mix: {block: 'new-tweet', elem: 'create-tweet'}
        }
    ];
});
