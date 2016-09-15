({
    mustDeps: ['i18n', 'variables'],
    shouldDeps: [
        {
            mods: {view: ['404', 'feed', 'profile', 'login', 'settings', 'tweet', 'registration', 'search']}
        },
        {
          block:'header',
            mods: { type: ['profile', 'settings', 'replies', 'search']}
        },
        'app',
        'body',
        'footer',
        'feed',
        'aside',
        'login',
        'userinfo',
        'profile-edit',
        'new-tweet',
        'main',
        'navigation',
        'register'
    ]
})
