modules.define('tweet-toolbar', ['i-bem__dom', 'jquery'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited: function () {
                        this.bindTo('reply', 'click', this._onReplyClick);
                    }
                }
            },

            _onReplyClick: function () {
                this.emit('openReply');
            }
        }
    ));
});
