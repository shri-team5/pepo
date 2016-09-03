const registration = (data) => {

    return {
        view: 'registration',
        title: 'Registration page',
        register: data,
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        }
    }
};

module.exports = registration;
