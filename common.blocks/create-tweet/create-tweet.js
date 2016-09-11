modules.define('create-tweet', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name, {
            onSetMod: {
                js: function () {
                    this.elem('icon').on('click', this._onNewTweetClick.bind(this));
                }
            },

            _onNewTweetClick: function () {
                this.emit('show-new-tweet-from');
            }
        })
    );
});
