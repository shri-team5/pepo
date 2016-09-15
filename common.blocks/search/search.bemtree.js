block('search').content()(function () {

    return [
        {
            block: 'input',
            mods: {theme: 'islands', size: 'l'},
            name: 'search',
            val: '',
            mix: {block: 'search', elem: 'input'}
        }
    ];
});
