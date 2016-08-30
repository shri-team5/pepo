const settings = (profile) => {

    return {
        view: 'settings',
        title: 'Settings',
        profile: profile,
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        }
    }
};

module.exports = settings;
