modules.define('app', ['i-bem__dom', 'jquery', 'tweet-toolbar'], function (provide, BEMDOM, $, Toolbar) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {

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

                    this.findBlockInside('new-tweet').on(
                        'allowSubmitForm',
                        this._tweetAllowSubmitForm,
                        this);
                    this.findBlockInside('new-tweet').on(
                        'disallowSubmitForm',
                        this._tweetDisallowSubmitForm,
                        this);

                    Toolbar.on('openReply', this._onOpenReply, this);
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
            this.findBlockInside('header')._onNewTweetClick();
            // console.log(this.findBlockInside('new-tweet-reply').domElem.val());
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

        _onGetMoreTweets: function (e, data) {
            // Выставляем модификатор на блок, чтобы не триггерить его до окончания подгрузки
            this.findBlockInside('main').toggleMod('loading');

            // Получаем твиты и аппендим к ленте
            this._getMoreTweets(this._getCurrentOffset(), 10, {[data.type]: data.value})
                .then(function (tweets) {
                    BEMDOM.append(
                        this.findBlockInside('feed').domElem,
                        tweets
                    );
                    setTimeout(() => {
                        this.findBlockInside('main').toggleMod('loading');
                    }, 1000);
                }.bind(this))
                .catch(function (err) {
                    console.log(err);
                });
        }
    }));
});
