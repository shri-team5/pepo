modules.define('main', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var feed = this.findBlockInside('feed');

                    this.bindTo('scroll', function (e) {
                        var scroll = this.domElem.scrollTop(),
                            view = this.domElem.height(),
                            offset = scroll + view,
                            feedHeight = feed.domElem.height();

                        console.log(offset, feedHeight, this.hasMod('loading'));
                        // Если всё ок, то эмитим БЭМ-событие
                        if ((offset > feedHeight) && (!this.hasMod('loading'))) {
                            console.log('emit loading more tweets');
                            this.emit('getMoreTweets');
                        }
                    });
                }
            }
        }
    }));
});
