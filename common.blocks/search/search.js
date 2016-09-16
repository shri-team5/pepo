modules.define('search', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this.elem('input').on('keyup', this._performSearch.bind(this));
                }
            }
        },
        /**
         * Эмитит событие о том, что поле поиска изменилось
         * @param {Event} e - событие изменения поля
         * @private
         */
        _performSearch: function (e) {
            this.emit('searchTweets', {value: e.target.value});
        }
    }));
});
