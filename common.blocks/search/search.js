modules.define('search', ['i-bem__dom', 'events__channels'], function (provide, BEMDOM, channels) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var self = this;
                    var tagChannel = channels('tag-channel');
                    var searchQuery = this._getParameterByName('search');
                    var tagQuery = this._getParameterByName('tag');
                    this.elem('input').on('keyup', this._performSearch.bind(this));

                    tagChannel.on('filter-hashtag', function (e, data) {
                        self._setInputValue(data);
                    });
                    if (searchQuery) {
                        self._setInputValue(searchQuery);
                    }
                    if (tagQuery) {
                        self._setInputValue('#'+tagQuery);
                    }
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
        },

        /**
         * Установка значение в поле поиска
         * @param {String} value - значение
         * @private
         */
        _setInputValue: function (value) {
            this.findBlockInside('input').setVal(value);
        },

        /**
         * Получает query параметр из адресной строки
         * @param {String} name - имя параметра
         * @param {String} [url] - значение адресной строки
         * @returns {*}
         * @private
         */
        _getParameterByName(name, url) {
            var regex;
            var results;
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, '\\$&');
            regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            results = regex.exec(url);
            if (!results) {
                return null;
            }
            if (!results[2]) {
                return '';
            }
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
    }));
});
