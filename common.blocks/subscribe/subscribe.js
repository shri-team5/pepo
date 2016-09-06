modules.define('subscribe', ['i-bem__dom', 'jquery', 'i18n'], function (provide, BEMDOM, $, i18n) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this.bindTo('click', this._toggleSubscribe.bind(this));

                    this.hasMod('subscribed') && this.domElem.text(i18n('subscribe', 'reading'));
                }
            },
            subscribed: {
                true: function () {
                    this.domElem.text(i18n('subscribe', 'reading'));
                },
                "": function () {
                    this.domElem.text(i18n('subscribe', 'read'));
                }
            }
        },
        _toggleSubscribe: function () {
            var user_id = this.domElem.data('user_id');
            if (this.hasMod('subscribed')) {
                this._requestSubscriptions(user_id, 'unsubscribe')
            }
            else {
                this._requestSubscriptions(user_id, 'subscribe')
            }
        },
        _requestSubscriptions: function (user_id, path) {
            var self = this;
            $.ajax({
                url: "/profile/" + path + "/" + user_id,
                type: "POST",
                data: {},
                success: function (response) {
                    if (!response.error.length) {
                        self.toggleMod('subscribed')
                    } else {
                        alert(i18n('feed', 'error') + response.error);
                    }
                },
                error: function (xhr) {
                    alert(i18n('feed', 'error'));
                }
            });
        }
    }));

});
