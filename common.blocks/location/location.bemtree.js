block('location').content()(function () {
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
            text: 'Местоположение'
        },
        {
            elem: 'text'
        }
    ];
});
