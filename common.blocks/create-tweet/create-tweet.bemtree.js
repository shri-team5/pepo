block('create-tweet').content()(function () {
    return [
        {
            block: 'icon',
            mix: [{block: 'create-tweet', elem: 'icon'}],
            mods: {type: 'plus'}
        }
    ];
});
