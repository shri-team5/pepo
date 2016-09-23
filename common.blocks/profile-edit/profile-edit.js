modules.define('profile-edit', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl({
        onSetMod: {
            js: {
                inited: function () {
                    // var lang = this.findElem('language');

                    // Установить язык интерфейса
                    // window.localStorage.lang ? console.log('Have languages setting') : console.log('No languages');
                    //
                    // langButton.on('click', function () {
                    //     popup.toggleMod('visible', true);
                    // });
                }
            }
        }
    }));

});
