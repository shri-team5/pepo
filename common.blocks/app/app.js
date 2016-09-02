modules.define('app', ['i-bem__dom', 'jquery', 'tweet-toolbar'], function (provide, BEMDOM, $, Toolbar) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    ['header-new-tweet', 'header-back'].map(function (event) {
                        this.findBlockInside('header').on(
                            event,
                            this._onHeaderNewTweetEvent,
                            this);
                    }, this);

                    this.findBlockInside('header').on(
                        'header-submit',
                        this._onHeaderSubmit,
                        this);

                    // Навеситься на событие скрола ленты (блок main)
                    this.findBlockInside('main').on(
                        'getMoreTweets',
                        this._onGetMoreTweets,
                        this);

                    Toolbar.on('openReply', this._onOpenReply, this);
                }
            }
        },

        _onOpenReply: function (data) {
            var replyTo = data.target.params.tweetid;
            this.findBlockInside('new-tweet-reply').domElem.val(replyTo);
            this.findBlockInside('header')._onNewTweetClick();
            // console.log(this.findBlockInside('new-tweet-reply').domElem.val());
        },

        _onHeaderNewTweetEvent: function () {
            ['new-tweet', 'main'].map(function (block) {
                this.findBlockInside(block).toggleMod('visible');
            }, this);
        },

        _onHeaderSubmit: function () {
            this.findBlockInside('new-tweet').domElem.submit();
        },

        _getMoreTweets: function (offset, count) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: '',
                    async: true,
                    type: 'get',
                    data: {
                        offset: offset,
                        count: count || 10
                    },
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

        _onGetMoreTweets: function () {
            // Выставляем модификатор на блок, чтобы не триггерить его до окончания подгрузки
            this.findBlockInside('main').toggleMod('loading');

            // Получаем твиты и аппендим к ленте
            this._getMoreTweets(this._getCurrentOffset())
                .then(function (tweets) {
                    BEMDOM.append(
                        this.findBlockInside('feed').domElem,
                        tweets
                    );
                    this.findBlockInside('main').toggleMod('loading');
                }.bind(this))
                .catch(function (err) {
                    console.log(err);
                });
        }
    }));
});
