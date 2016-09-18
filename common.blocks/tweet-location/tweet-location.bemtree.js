block('tweet-location').content()(function () {
    const location = this.ctx.location;

    return [
        {
            block: 'icon',
            mods: {type: 'location'},
            mix: {block: 'tweet-location', elem: 'icon'}
        },
        {
            elem: 'link',
            content: location,
            attrs: {
                href: 'https://yandex.ru/maps/?mode=whatshere&whatshere%5Bpoint%5D=' + location +
                '&whatshere%5Bzoom%5D=13',
                target: '_blank'
            }
        }
    ];
});




