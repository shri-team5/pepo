modules.define('page', function(provide, Page) {

    // Доопределяем базовый блок с модификтором _m1_v1
    provide(Page.decl({ modName : 'view', modVal : 'feed' }, {
        onSetMod: {
            js: function () {
                console.log('Modified block');
            }
        }
    }));

});
