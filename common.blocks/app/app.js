modules.define('app', ['i-bem__dom'], function (provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function () {
                ['header-new-tweet', 'header-back'].map(event => {
                    this.findBlockInside('header').on(
                        event,
                        this._onHeaderNewTweetEvent,
                        this);
                });

                this.findBlockInside('header').on(
                    'header-submit',
                    this._onHeaderSubmit,
                    this
                );
            }
        }
    },

    _onHeaderNewTweetEvent: function () {
        ['new-tweet', 'feed'].map(block => {
            this.findBlockInside(block).toggleMod('visible');
        });
    },

    _onHeaderSubmit: function () {
        this.findBlockInside('new-tweet').domElem.submit();
    }
}));

});
