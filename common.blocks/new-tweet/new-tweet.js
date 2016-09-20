modules.define('new-tweet', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var self = this;
                    this.elem('input').on('keyup', function () {
                        if (this.value.length === 0) {
                            self.delMod('haspreview');
                        }

                        if (this.value.length > 0 && this.value.length <= 140) {
                            // Если ещё не прицепили ссылку, проверям что
                            // вводит пользователь
                            if (!self.hasMod('haspreview')) {
                                self._checkLinks(this.value);
                            }

                            self.emit('allowSubmitForm');
                        } else {
                            self.emit('disallowSubmitForm');
                        }

                    });
                }
            },

            'visible': {
                true: function () {
                    this.elem('input').focus();
                },
                false: function () {
                    this.findBlockOutside('page').focus();
                }
            }
        },

        _containsLink: function (text) {
            var linkRegExp = /(https?:\/\/)?([\da-z.-]+)\.([a-z\.]{2,6})([/\w\.-]*)*\/?/;
            var isItLink = text.match(linkRegExp);

            return isItLink ? isItLink[0] : false;
        },

        _getLinkPreview: function (link) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: '/linkpreview',
                    async: true,
                    type: 'get',
                    data: {link: link},
                    success: function (response) {
                        resolve(response);
                    },
                    error: function (xhr) {
                        reject(xhr);
                    }
                });
            });
        },

        _checkLinks: function (text) {
            var link = this._containsLink(text);
            if (!link) {
                return;
            }
            this.setMod('haspreview');
            this._getLinkPreview(link).then(function (linkPreview) {
                BEMDOM.replace(
                    this.findBlockInside('link-preview').domElem,
                    linkPreview
                );
            }.bind(this), function (xhr) {
                console.log('Error happened', xhr);
            });
            this.setMod(this.elem('link-preview'), 'visible', true);
        }
    }));
});
