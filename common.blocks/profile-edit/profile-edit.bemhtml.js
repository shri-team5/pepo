block('profile-edit')(
    tag()('form'),
    attrs()(function () {
        return {
            method: 'post',
            action: '/settings/',
            name: 'settings'
        };
    })
);