block('profile-edit').content()(function () {

    let settings = this.ctx.data.profile.data;
    const i18n = this.i18n;

    return [
        {
            elem: 'userpic-settings',
            content: [
                {
                    block: 'userpic',
                    src: settings.avatarPath,
                    alt: 'avatar',
                    mix: {block: 'profile-edit', elem: 'userpic'}
                },
                {
                    elem: 'userpic-attach',
                    content: [
                        {
                            block: 'attach',
                            mods: {theme: 'islands', size: 'l', focused: true},
                            name: 'avatar',
                            button: i18n('profile-edit', 'userpic-attach-button'),
                            noFileText: i18n('profile-edit', 'userpic-attach-no-file')
                        }
                    ]
                },
                {
                    block: 'delimiter'
                },
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    placeholder: i18n('profile-edit', 'fullName'),
                    name: 'fullName',
                    val: settings.fullName,
                    mix: {block: 'profile-edit', elem: 'input'}
                },
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    placeholder: i18n('profile-edit', 'login'),
                    name: 'username',
                    val: settings.username,
                    mix: {block: 'profile-edit', elem: 'input'}
                },
                {
                    elem: 'input',
                    content: {
                        block: 'textarea',
                        val: settings.description,
                        name: 'description',
                        mods: {theme: 'islands', width: 'available', size: 'l'},
                        placeholder: i18n('profile-edit', 'description')
                    }
                },
                {
                    elem: 'language',
                    content: [
                        {
                            elem: 'language_label',
                            content: i18n('profile-edit', 'language')
                        },
                        {
                            block: 'button',
                            mods: {theme: 'islands', size: 'l', type: 'button'},
                            text: 'English',
                            mix: {block: 'profile-edit', elem: 'lang_button_en'}
                        },
                        {
                            block: 'button',
                            mods: {theme: 'islands', size: 'l', type: 'button'},
                            text: 'Русский',
                            mix: {block: 'profile-edit', elem: 'lang_button_ru'}
                        }
                    ]
                },
                {
                    elem: 'button',
                    content: {
                        block: 'button',
                        mods: {theme: 'islands', size: 'l', type: 'submit'},
                        text: i18n('profile-edit', 'save')
                    }
                }

            ]
        }
    ];
});
