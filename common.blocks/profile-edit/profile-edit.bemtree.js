block('profile-edit').content()(()=> {

    return [
        {
            elem: 'userpic-settings',
            content: [
                {
                    block: 'userpic',
                    src: "http://placehold.it/96x96",
                    alt: "avatar",
                    mix: {block: 'profile-edit', elem: 'userpic'}
                },
                {
                    elem: 'userpic-attach',
                    content: [
                        {
                            block: 'attach',
                            mods: {theme: 'islands', size: 'l', focused: true},
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
                    mix: {block: 'profile-edit', elem: 'input'}
                },
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    placeholder: 'Введите логин ',
                    mix: {block: 'profile-edit', elem: 'input'}
                },
                {
                    elem: 'input',
                    content: {
                        block: 'textarea',
                        mods: {theme: 'islands', width: 'available', size: 'l'},
                        placeholder: 'Введите описание ',
                    }
                },
                {
                    elem: 'button',
                    content: {
                        block: 'button',
                        mods: {theme: 'islands', size: 'l', type: 'submit'},
                        text: 'Сохранить',
                    }
                }

            ]
        }
    ]
})