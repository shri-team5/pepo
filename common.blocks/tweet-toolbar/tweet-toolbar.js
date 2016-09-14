modules.define('tweet-toolbar', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name,
    {
        onSetMod: {
            js: {
                inited: function () {
                    var location = this.elem('location-link').html();
                    this.bindTo('reply', 'click', this._onReplyClick);
                    if (location.length) {
                        this._loadAddress(location);
                    }
                }
            }
        },

        _onReplyClick: function () {
            this.emit('openReply');
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
                    self.elem('location-link').html(members[0].GeoObject.description);
                    self.elem('location').fadeIn();
                },
                error: function (xhr) {
                    self.elem('location').fadeIn();
                }
            });
        }
    },
    {
        /*live: function () {
            this.liveBindTo('reply', 'click', this.prototype._onReplyClick);
        }*/
    }
));

});
