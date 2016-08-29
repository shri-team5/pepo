block('profile-edit').content()(function(){

    let settings = this.ctx.data.profile.data;

    return [
        {
            elem: 'userpic-settings',
            content: [
                {
                    block: 'userpic',
                    src: settings.avatarPath,
                    alt: "avatar",
                    mix: {block: 'profile-edit', elem: 'userpic'}
                },
                {
                    elem: 'userpic-attach',
                    content: [
                        {
                            block: 'attach',
                            mods: {theme: 'islands', size: 'l', focused: true},
                            name: 'avatar',
                            button: 'Выберите файл',
                            noFileText: 'Файл не выбран'
                        }
                    ]
                },
                {
                    block: 'delimiter'
                },
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    placeholder: 'Введите имя ',
                    name: 'fullName',
                    val: settings.fullName,
                    mix: {block: 'profile-edit', elem: 'input'}
                },
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    placeholder: 'Введите логин ',
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
                        placeholder: 'Введите описание '
                    }
                },
                {
                    elem: 'button',
                    content: {
                        block: 'button',
                        mods: {theme: 'islands', size: 'l', type: 'submit'},
                        text: 'Сохранить'
                    }
                }

            ]
        }
    ]
});