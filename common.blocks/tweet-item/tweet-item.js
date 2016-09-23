modules.define('tweet-item', ['i-bem__dom', 'jquery', 'events__channels'], function (provide, BEMDOM, $, channels) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var self = this;

                    var tagChannel = channels('tag-channel');
                    this.bindTo('hashtag', 'click', function (e) {
                        e.preventDefault();
                        tagChannel.emit('filter-hashtag', e.target.innerHTML);
                    });

                }
            }
        }
    }));
});
