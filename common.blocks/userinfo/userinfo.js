modules.define('userinfo', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var subscribe = this.findBlockInside('subscribe');

                    // Реагируем на изменение состояния модификатора блока subscribe
                    subscribe.on({ modName: 'subscribed', modVal: true }, this._subscribe.bind(this, 1), this);
                    subscribe.on({ modName: 'subscribed', modVal: false }, this._subscribe.bind(this, -1), this);
                }
            }
        },

        _subscribe: function (val) {
            var followers = this.findBlockInside({
                block: 'counter',
                modName: 'type',
                modVal: 'followers'
            }).elem('number');

            followers.text( +followers.text() + val );
        }
    }));
});
