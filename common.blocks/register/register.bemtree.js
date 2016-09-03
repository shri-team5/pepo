block('register').content()(function () {

    const {register} = this.data;

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
                    val: register.login,
                    attrs:{required: true},
                    mix: {block: 'profile-edit', elem: 'input'}
                }
            ]
        },
        {
            elem:"error",
            content: register.error
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