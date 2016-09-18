modules.define('tweet-location', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited: function () {
                        var location = this.elem('link').html();
                        if (location.length) {
                            this._loadAddress(location);
                        }
                    }
                }
            },
            _loadAddress: function (coordinates) {
                var self = this;
                $.ajax({
                    url: 'https://geocode-maps.yandex.ru/1.x/?geocode=' + coordinates + '&format=json',
                    async: true,
                    type: 'get',
                    data: {},
                    success: function (response) {
                        var members = response.response.GeoObjectCollection.featureMember;
                        self.elem('link').html(members[0].GeoObject.description);
                        self.domElem.fadeIn();
                    },
                    error: function (xhr) {
                        self.domElem.fadeIn();
                    }
                });
            }
        }
    ));

});
