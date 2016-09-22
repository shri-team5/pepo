modules.define('socket', ['io', 'events__channels'], function (provide, io, channels) {

    var socketChannel = channels('socket-channel');
    var socket = {
        server: null,
        connect: function (address) {
            var self = this;
            this.server = io.connect(address, {secure: true, port: 3000});
            this.server.on('message', function (msg) {
                socketChannel.emit(msg.event, msg);
            });

            socketChannel.on('send', function (e, data) {
                self.server && self.server.emit(data.event, data.params);
            });
        }
    };

    provide(socket);
});
