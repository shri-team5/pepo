modules.define('tweet-toolbar', ['i-bem__dom'], function (provide, BEMDOM) {

provide(BEMDOM.decl(this.name,
    {
        // методы экземпляра
        onSetMod: {
            js: function () {
                var like = this.findBlockInside('like'),
                    retweet = this.findBlockInside('retweet');

                like.bindTo('click', function (e) {
                    console.log('like');
                });

                retweet.bindTo('click', function (e) {
                    console.log('retweet');
                });
            }
        }
    },
    {
        // статические методы
    }
));

});
