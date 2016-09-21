modules.define('socket', ['io', 'events__channels'], function (provide, io, channels) {

    var socketChannel = channels('socket-channel');
    var socket = {
        server: null,
        connect: function (address) {
            var self = this;
            this.server = io.connect(address);
            this.server.on('message', function (msg) {
                console.log(msg);
                socketChannel.emit(msg.event, msg);
                // if (msg.event === 'new tweet') {
                //     BEMDOM.prepend(
                //         feedBlock.domElem,
                //         msg.html
                //     );
                // }
            });

            socketChannel.on('send', function (e, data) {
                console.log(data);
                self.server && self.server.emit(data.event, data.params);
            });

            // this.server.emit('add user',
            //     this.params,
            //     {[feedBlock.getMod('type')]: feedBlock.getMod('value')}
            // );
        }
    };

    provide(socket);
});
