block('register').content()(function () {
    return [
        {
            elem:'field',
            content:[
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    name:'username',
                    placeholder: 'Введите логин ',
                    mix: {block: 'profile-edit', elem: 'input'}
                }
            ]
        },
        {
            elem:'actions',
            content:[
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