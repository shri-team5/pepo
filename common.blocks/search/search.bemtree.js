block('search').content()(function () {

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
            mix: {block: 'search', elem: 'input'}
        }
    ];
});
