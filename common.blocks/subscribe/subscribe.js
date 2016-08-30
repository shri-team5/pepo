modules.define('subscribe', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this.bindTo('click', this._toggleSubscribe.bind(this));

                    this.hasMod('subscribed') && this.domElem.text('Читаю');
                }
            },
            subscribed: {
                true: function () {
                    this.domElem.text('Читаю');
                },
                "": function () {
                    this.domElem.text('Читать');
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
                        alert('Something going wrong :( ' + response.error);
                    }
                },
                error: function (xhr) {
                    alert('Something going wrong :(');
                }
            });
        }
    }));

});
