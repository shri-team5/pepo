modules.define('header', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name, {
            onSetMod: {
                js: function () {
                    this.elem('plus').on('click', this._onNewTweetClick.bind(this));
                    this.elem('back').on('click', this._onBackClick.bind(this));
                    this.elem('submit').on('click', this._onSubmitClick.bind(this));
                }
            },

            _onSubmitClick: function () {
                this.emit('header-submit');
            },

            _onBackClick: function () {
                this.emit('header-back');
                this.toggleMod(this.elem('back'), 'visible');
                this.setMod(this.elem('plus'), 'visible', true);

                this.setMod(this.elem('burger'), 'visible', true);
                this.setMod(this.elem('submit'), 'visible', false);
            },

            _onNewTweetClick: function () {
                this.emit('header-new-tweet');
                this.setMod(this.elem('back'), 'visible', true);
                this.setMod(this.elem('plus'), 'visible', false);

                this.setMod(this.elem('burger'), 'visible', false);
                this.setMod(this.elem('submit'), 'visible', true);
            }
        })
    )
});
