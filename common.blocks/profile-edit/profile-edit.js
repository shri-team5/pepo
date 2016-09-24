modules.define('profile-edit', ['i-bem__dom', 'jquery'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var self = this;
                    this.elem('lang_button_ru').on('click', function (e) {
                        e.preventDefault();
                        self._setCookie('lang', 'ru', {expires: 100000000000, path: '/'});
                    });

                    this.elem('lang_button_en').on('click', function (e) {
                        e.preventDefault();
                        self._setCookie('lang', 'en', {expires: 100000000000, path: '/'});
                    });
                }
            }
        },

        _setCookie(name, value, options) {
            options = options || {};

            var expires = options.expires;

            if (typeof expires == 'number' && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires * 1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) {
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + '=' + value;

            for (var propName in options) {
                updatedCookie += '; ' + propName;
                var propValue = options[propName];
                if (propValue !== true) {
                    updatedCookie += '=' + propValue;
                }
            }

            document.cookie = updatedCookie;
        }
    }));

});
