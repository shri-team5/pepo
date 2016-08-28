block('root').replace()(function() {
    var ctx = this.ctx,
        data = this.data = ctx.data,
        meta = data.meta || {},
        og = meta.og || {};

    if (ctx.context) return ctx.context;

    return {
        block: 'page',
        title: data.title,
        favicon: '/favicon.ico',
        styles: [
            {
                elem: 'css',
                url: '/index.min.css'
            },
            {
                elem: 'css',
                url: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&subset=cyrillic,cyrillic-ext'
            },
            { elem : 'css', url : '/icon_128.png' , attrs : { rel : 'icon' } },
            { elem : 'css', url : '/icon_200.png' , attrs : { rel : 'apple-touch-icon' } }
        ],
        scripts: [
            {
                elem: 'js',
                url: '/index.min.js'
            }
        ],
        head: [
            { elem: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
            { elem: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
            { elem: 'meta', attrs: { name: 'description', content: meta.description } },
            { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
            { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
            { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
            { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'en_US' } },
            { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }

        ],
        mods: {
            theme: 'islands',
            view: data.view
        }
    };
});
