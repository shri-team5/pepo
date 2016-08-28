modules.define('app', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

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
                        this
                    );

                    // Навеситься на событие скрола ленты (блок main)
                    this.findBlockInside('main').on('getMoreTweets', this._onGetMoreTweets, this)
                }
            }
        },

        _onHeaderNewTweetEvent: function () {
            ['new-tweet', 'main'].map(function (block) {
                this.findBlockInside(block).toggleMod('visible');
            }, this);
        },

        _onHeaderSubmit: function () {
            this.findBlockInside('new-tweet').domElem.submit();
        },

        _getMoreTweets: function () {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: '/',
                    type: 'get',
                    data: {
                        offset: 2,
                        count: 5
                    },
                    success: function (response) {
                        resolve(response);
                    }
                });
            });
        },

        _onGetMoreTweets: function () {
            // Выставляем модификатор на блок, чтобы не триггерить его много раз
            this.findBlockInside('feed').toggleMod('loading');

            // Получаем твиты и аппендим к ленте
            console.log('Getting more tweets');
            this._getMoreTweets().then(function (tweets) {
                console.log('Promise has done');
                console.log(tweets);
                BEMDOM.append(
                    this.findBlockInside('feed'),
                    '<div class="tweet">data</div>'
                );
            }.bind(this));

            // Аппендим к ленте
            console.log('Appending to feed');

            // Снимаем модификатор loading
            this.findBlockInside('feed').toggleMod('loading');
        }
    }));

});
