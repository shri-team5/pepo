block('register')(
    tag()('form'),
    attrs()(function () {
        return {
            method: 'post',
            action: '/registration',
            name: 'registration'
        };
    })
);
