modules.define('main', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var feed = this.findBlockInside('feed');

                    if(feed){
                        this.bindTo('scroll', function (e) {
                            var scroll = this.domElem.scrollTop(),
                                view = this.domElem.height(),
                                offset = scroll + view,
                                feedHeight = feed.domElem.height();

                            // Если всё ок, то эмитим БЭМ-событие
                            if ((offset >= feedHeight) && (!this.hasMod('loading'))) {
                                // console.log('emit loading more tweets');
                                this.emit('getMoreTweets',{type:feed.params.type, value: feed.params.value});
                            }
                        });
                    }
                }
            }
        }
    }));
});
