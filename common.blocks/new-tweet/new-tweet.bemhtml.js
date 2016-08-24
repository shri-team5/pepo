block('new-tweet')(
    js()(true),
    tag()('form'),
    attrs()(function () {
        return {
            method: 'post',
            action: '/tweets',
            name: 'new-tweet'
        };
    })
);
