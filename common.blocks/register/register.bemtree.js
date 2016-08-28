block('register').content()(function () {
    return [
        {
            block:'logo'
        },
        {
            elem:'title',
            content: 'Придумайте логин'
        },
        {
            elem:'field',
            content:[
                {
                    block: 'input',
                    mods: {theme: 'islands', size: 'l'},
                    name:'username',
                    placeholder: '',
                    mix: {block: 'profile-edit', elem: 'input'}
                }
            ]
        },
        {
            elem:'actions',
            content:[
                {
                    block: 'button',
                    attrs: {type: 'submit'},
                    text: '&#10003;',
                    mix:{block:'register', elem: 'button'}
                }
            ]
        }
    ]
});