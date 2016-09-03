block('new-tweet')(
    js()(true),
    tag()('form'),
    attrs()(function () {
        return {
            method: 'post',
            enctype: 'multipart/form-data',
            action: '/tweets',
            name: 'new-tweet'
        };
    })
);
