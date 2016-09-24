block('profile-edit')(
    js()(true),
    tag()('form'),
    attrs()(function () {
        return {
            enctype: 'multipart/form-data',
            method: 'post',
            action: '/settings/',
            name: 'settings'
        };
    })
);