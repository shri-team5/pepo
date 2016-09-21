const config = require('./config');
const Render = require('./render');

let testTweet = [
    {
        _id: '57d5c120fd6668362082aa54',
        updatedAt: '2016-09-11T20:40:02.886Z',
        createdAt: '2016-09-11T20:40:02.886Z',
        image: 'https://res.cloudinary.com/djwtkcbda/image/upload/v1473626402/njkq0i5zome2ippwbfpp.jpg',
        author: {
            _id: '57c29a59a4e9e10e147b6c66',
            updatedAt: '2016-09-18T07:00:19.546Z',
            createdAt: '2016-08-28T08:01:29.817Z',
            avatarPath: 'https://res.cloudinary.com/djwtkcbda/image/upload/v1473112520/ziqr3v6mdkhicgd3gsgo.jpg',
            fullName: 'Артур Каримов',
            username: 'grimfri',
            subscriptions: ['57c29a67a4e9e10e147b6c68',
                '57c29b33a4e9e10e147b6c6c',
                '57c2b248a4e9e10e147b6c71',
                '57cd462e9c9309235327d35b',
                '57de3b1686a04a8157d6b707'],
            vkontakte: {id: '7684090'},
            __v: 397,
            description: '<script>console.log(\'olo\')</script>',
            subscribtions: ['57c29a67a4e9e10e147b6c68']
        },
        type: 'text',
        text: 'Фиолент этим летом ',
        __v: 0
    },
    {
        _id: '57d414f9fd6668362082aa50',
        updatedAt: '2016-09-10T14:13:13.784Z',
        createdAt: '2016-09-10T14:13:13.784Z',
        parentTweet: '57d332fefd6668362082aa4e',
        author: {
            _id: '57c29b33a4e9e10e147b6c6c',
            updatedAt: '2016-09-10T23:29:51.171Z',
            createdAt: '2016-08-28T08:05:07.516Z',
            avatarPath: 'https://res.cloudinary.com/djwtkcbda/image/upload/v1473200512/lwcopjv1q3hl9vg0na5o.jpg',
            fullName: 'Vasily Krasnov',
            username: 'basilred',
            subscriptions: ['57c411954735904a36db16bd',
                '57ca98b799d5589c19f6dc7c',
                '57cc81c79c9309235327d356',
                '57c29a59a4e9e10e147b6c66',
                '57c2b248a4e9e10e147b6c71'],
            vkontakte: {id: '20718869'},
            __v: 13,
            description: 'Делаем пепо лучше'
        },
        type: 'text',
        text: 'Нужно срочно делать лайки! 😀',
        __v: 0
    },
    {
        _id: '57dc14d4fd6668362082aa5a',
        updatedAt: '2016-09-16T15:50:44.493Z',
        createdAt: '2016-09-16T15:50:44.493Z',
        location: '34.1432817,44.9194155',
        author: {
            _id: '57c29b33a4e9e10e147b6c6c',
            updatedAt: '2016-09-10T23:29:51.171Z',
            createdAt: '2016-08-28T08:05:07.516Z',
            avatarPath: 'https://res.cloudinary.com/djwtkcbda/image/upload/v1473200512/lwcopjv1q3hl9vg0na5o.jpg',
            fullName: 'Vasily Krasnov',
            username: 'basilred',
            subscriptions: ['57c411954735904a36db16bd',
                '57ca98b799d5589c19f6dc7c',
                '57cc81c79c9309235327d356',
                '57c29a59a4e9e10e147b6c66',
                '57c2b248a4e9e10e147b6c71'],
            vkontakte: {id: '20718869'},
            __v: 13,
            description: 'Делаем пепо лучше'
        },
        type: 'text',
        text: 'Я здесь ;)',
        __v: 0
    }


]

const start = () => {
    const io = require('socket.io').listen(8085);
    let sockets = {};
    io.sockets.on('connection', function (socket) {
        var time = (new Date).toLocaleTimeString();
        socket.json.send({'event': 'connected', 'time': time});

        socket.on('register-user', (user)=> {
            socket.user = user;
            socket.user.subscribers = [
                '57c29a67a4e9e10e147b6c68',
                '57c29b33a4e9e10e147b6c6c',
                '57c2b248a4e9e10e147b6c71',
                '57cd462e9c9309235327d35b',
                '57de3b1686a04a8157d6b707'
            ];
            sockets[socket.id] = socket;
        });

        socket.on('register-feed', (feed)=> {
            socket.feed = feed;
        });


        socket.on('disconnect', function () {
            delete (sockets[socket.id]);
        });
    });
    setInterval(()=> {
        const tweet = testTweet[Math.floor(Math.random() * 2)];
        for (let index of Object.keys(sockets)) {
            let socket = sockets[index];
            console.log(socket.feed);
            if(socket.feed){
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
    }, 10000);
};

module.exports = start;
