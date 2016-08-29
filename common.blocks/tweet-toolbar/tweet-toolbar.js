modules.define('tweet-toolbar', ['i-bem__dom'], function (provide, BEMDOM) {

provide(BEMDOM.decl(this.name,
    {
        // методы экземпляра
        onSetMod: {
            js: function () {
                var reply = this.findBlockInside('reply');

                reply.bindTo('click', function (e) {
                    console.log('reply');
                });
            }
        }
    },
    {
        // статические методы
    }
));

});
