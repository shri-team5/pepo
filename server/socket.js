const config = require('./config');
const Render = require('./render');

const start = (server) => {
    const io = require('socket.io').listen(server);
    const ioApi = require('socket.io-client');
    const serverApi = ioApi.connect('http://' + config.backendHost + ':' + config.backendPort);
    let sockets = {};

    serverApi.on('message', function (msg) {
        if (msg.event === 'new-tweet') {
            const tweet = msg.data;
            for (let index of Object.keys(sockets)) {
                let socket = sockets[index];
                if (socket.feed) {
                    if (
                        (socket.feed.user && socket.feed.user === tweet.author._id) ||
                        (socket.feed.feed && socket.feed.feed === 'self' &&
                            socket.user.subscribers.indexOf(tweet.author._id) >= 0
                        ) ||
                        (socket.feed.search && tweet.text.indexOf(socket.feed.search) >= 0) ||
                        (socket.feed.search === '')
                    ) {
                        socket.json.send({
                                'event': 'new-tweet',
                                'html': Render.getHtmlContent({block: 'tweet', data: tweet}).html
                            }
                        );
                    }
                }

            }
        }
    });

    io.sockets.on('connection', function (socket) {
        var time = (new Date).toLocaleTimeString();
        socket.json.send({'event': 'connected', 'time': time});

        socket.on('register-user', (user)=> {
            socket.user = user.data;
            socket.user.subscribers = socket.user.subscribers.length ? socket.user.subscribers : [];
            sockets[socket.id] = socket;
        });

        socket.on('register-feed', (feed)=> {
            socket.feed = feed;
        });


        socket.on('disconnect', function () {
            delete (sockets[socket.id]);
        });
    });

};

module.exports = start;
