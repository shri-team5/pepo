modules.define('app', ['i-bem__dom', 'jquery', 'tweet-toolbar', 'socket', 'events__channels'],
    function (provide, BEMDOM, $, Toolbar, socket, channels) {
        provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var self = this;
                        var socketChannel = channels('socket-channel');
                        var tagChannel = channels('tag-channel');

                        this.findBlockInside('create-tweet') &&
                        this.findBlockInside('create-tweet').on(
                            'show-new-tweet-from',
                            this._onHeaderNewTweetEvent,
                            this);

                        this.findBlockInside('header').on(
                            'header-back',
                            this._onHeaderNewTweetEvent,
                            this);

                        this.findBlockInside('header').on(
                            'header-submit',
                            this._onHeaderSubmit,
                            this);

                        // Навеситься на событие скрола ленты (блок main)
                        this.findBlockInside('main').on(
                            'getMoreTweets',
                            this._onGetMoreTweets,
                            this);

                        this.findBlockInside('new-tweet') &&
                        this.findBlockInside('new-tweet').on(
                            'allowSubmitForm',
                            this._tweetAllowSubmitForm,
                            this);

                        this.findBlockInside('new-tweet') &&
                        this.findBlockInside('new-tweet').on(
                            'disallowSubmitForm',
                            this._tweetDisallowSubmitForm,
                            this);

                        Toolbar.on('openReply', this._onOpenReply, this);


                        this.findBlockInside('search') &&
                        this.findBlockInside('search').on(
                            'searchTweets',
                            this._onSearchTweets,
                            this);

                        socket.connect('//' + window.location.hostname);

                        socketChannel.on('connected', function (e, data) {
                            socketChannel.emit('send',
                                {
                                    event: 'register-user',
                                    params: self.params
                                }
                            );
                        });

                        tagChannel.on('filter-hashtag', function (e, data) {
                            document.location.href = '/search/?tag=' + data.replace('#','');
                        });
                    }
                }
            },

            _tweetAllowSubmitForm: function () {
                this.findBlockInside('header').setMod('allowSubmit', true);
            },
            _tweetDisallowSubmitForm: function () {
                this.findBlockInside('header').setMod('allowSubmit', false);

            },
            _onOpenReply: function (data) {
                var replyTo = data.target.params.tweetid;
                this.findBlockInside('new-tweet-reply').domElem.val(replyTo);
                this.findBlockInside('create-tweet')._onNewTweetClick();
            },

            _onHeaderNewTweetEvent: function () {
                var header = this.findBlockInside('header');
                header.toggleMod(header.elem('standard'), 'visible');
                header.toggleMod(header.elem('newTweet'), 'visible');
                this.findBlockInside('create-tweet').toggleMod('visible');

                ['new-tweet', 'main'].forEach(function (block) {
                    this.findBlockInside(block).toggleMod('visible');
                }, this);
            },

            _onHeaderSubmit: function () {
                this.findBlockInside('new-tweet').domElem.submit();
            },

            _getMoreTweets: function (offset, count, query) {
                return new Promise(function (resolve, reject) {
                    query.offset = offset;
                    query.count = count || 10;

                    $.ajax({
                        url: '/tweets/choose',
                        async: true,
                        type: 'get',
                        data: query,
                        success: function (response) {
                            resolve(response);
                        },
                        error: function (xhr) {
                            reject(xhr);
                        }
                    });
                });

            },

            _getCurrentOffset: function () {
                return document.querySelector('.feed').childElementCount;
            },

            _getAndDisplayTweets: function (offset, count, query, displayMode) {

                var mainBlock = this.findBlockInside('main');
                var feedBlock = this.findBlockInside('feed');
                // Выставляем модификатор на блок, чтобы не триггерить его до окончания подгрузки
                mainBlock.toggleMod('loading');

                // Получаем твиты и аппендим к ленте
                this._getMoreTweets(offset, count, query)
                    .then(function (tweets) {
                        BEMDOM[displayMode](
                            feedBlock.domElem,
                            tweets
                        );
                        setTimeout(function () {
                            mainBlock.toggleMod('loading');
                        }.bind(this), 1000);
                    }.bind(this))
                    .catch(function (err) {
                        console.log(err);
                    });
            },

            /**
             * Подгружает следующий набор твитов
             * @private
             */
            _onGetMoreTweets: function () {
                var feedBlock = this.findBlockInside('feed');

                // Получаем твиты и аппендим к ленте
                this._getAndDisplayTweets(
                    this._getCurrentOffset(),
                    10,
                    {[feedBlock.getMod('type')]: feedBlock.getMod('value')},
                    'append'
                );

            },

            /**
             * Ищет твиты
             * @param {Event} e - информация о событии
             * @param {Object} data - значение поиска
             * @private
             */
            _onSearchTweets: function (e, data) {
                var feedBlock = this.findBlockInside('feed');
                var socketChannel = channels('socket-channel');

                feedBlock.setMod('value', data.value);
                socketChannel.emit('send',
                    {
                        event: 'register-feed',
                        params: {search: data.value}
                    }
                );

                this._getAndDisplayTweets(
                    0, 10, {'search': data.value},
                    'update'
                );

            }
        }));
    });
