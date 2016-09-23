block('location').content()(function () {
    var i18n = this.i18n;
    return [
        {
            elem: 'location',
            attrs: {
                type: 'hidden',
                name: 'location'
            }
        },
        {
            block: 'button',
            mix: {block: 'location', elem: 'button'},
            mods: {theme: 'islands', size: 'm', type: 'button'},
            text: i18n('location', 'location')
        },
        {
            elem: 'text'
        }
    ];
});
