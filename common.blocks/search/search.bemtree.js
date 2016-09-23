block('search').content()(function () {

    var i18n = this.i18n;
    return [
        {
            block: 'icon',
            mix: [{block: 'search', elem: 'icon'}],
            mods: {type: 'search-white'}
        },
        {
            block: 'input',
            mods: {theme: 'islands', size: 'l'},
            name: 'search',
            val: '',
            placeholder : i18n('search', 'placeholder'),
            mix: {block: 'search', elem: 'input'}
        }
    ];
});
