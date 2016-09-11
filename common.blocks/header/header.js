modules.define('header', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name, {
            onSetMod: {
                js: function () {
                    this.elem('back').on('click', this._onBackClick.bind(this));
                    this.elem('submit').on('click', this._onSubmitClick.bind(this));
                    this.elem('history-back').on('click', function (e) {
                        e.preventDefault();
                        window.history.back();
                    });
                }
            },

            _onSubmitClick: function () {
                this.emit('header-submit');
            },

            _onBackClick: function () {
                this.emit('header-back');
                // this.toggleMod(this.elem('standard'), 'visible');
                // this.toggleMod(this.elem('newTweet'), 'visible');
            }


        })
    );
});
