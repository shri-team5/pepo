block('aside').content()(function(){
    return [
        {
            block : 'menu',
            mods : { theme : 'islands', size:'xl'},
            content : [
                {
                    block : 'menu-item',
                    val : 1,
                    content : 'Профиль'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'Настройки'
                },
                {
                    block : 'menu-item',
                    val : 4,
                    content : 'Выход'
                }
            ]
        }
    ]
})