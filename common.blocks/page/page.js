modules.define('page', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: function () {
                console.log('Root page block');
            }
        }
    })); // Объявляем базовый блок

});
