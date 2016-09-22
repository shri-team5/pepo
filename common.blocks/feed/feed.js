modules.define('feed', ['i-bem__dom', 'events__channels', 'jquery'], function (provide, BEMDOM, channels, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var self = this;
                    var socketChannel = channels('socket-channel');
                    var newTweets = [];
                    socketChannel.on('connected', function (e, data) {
                        socketChannel.emit('send',
                            {
                                event: 'register-feed',
                                params: {[self.getMod('type')]: self.getMod('value')}
                            }
                        );
                    });
                    socketChannel.on('new-tweet', function (e, data) {
                        newTweets.push(data.html);
                        self.setMod(self.elem('new-tweets'), 'visible', true);
                    });

                    this.bindTo('new-tweets', 'click', function (e) {
                        e.preventDefault();
                        self.setMod(self.elem('new-tweets'), 'visible', false);
                        BEMDOM.prepend(
                            self.domElem,
                            newTweets.join('')
                        );
                        newTweets = [];

                        $('.main').animate({
                            scrollTop: 0
                        }, 1000);
                    });

                }
            }
        }
    }));
});
