modules.define('header', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name, {
            onSetMod: {
                js: function () {
                    this.elem('plus').on('click', this._onNewTweetClick.bind(this));
                }
            },
            _onNewTweetClick: function () {
                console.log('emit');
                this.emit('new-tweet');
                this.setMod('type', 'new');
            }
        })
    )
});
