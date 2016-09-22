var path = require('path'),
    config = require('./config'),
    langs = config.langs,
    bundleName = 'index',
    pathToBundle = path.resolve('desktop.bundles', bundleName),
    BEMTREE = langs.reduce(function (tmpls, lang) {
        tmpls[lang] = require(path.join(pathToBundle, bundleName + '.bemtree.' + lang + '.js')).BEMTREE;
        return tmpls;
    }, {}),
    BEMHTML = require(path.join(pathToBundle, bundleName + '.bemhtml.js')).BEMHTML,

    isDev = process.env.NODE_ENV === 'development',
    useCache = !isDev,
    cacheTTL = config.cacheTTL,
    cache = {};

function getHtmlContent(context) {
    let lang = 'ru';

    let bemtreeCtx = {
        block: 'root',
        context: context,
        data:{}
    };

    try {
        var bemjson = BEMTREE[lang].apply(bemtreeCtx);
    } catch (err) {
        console.error('BEMHTML error', err.stack);
        return {status: 0, error: err.stack};
    }

    try {
        var html = BEMHTML.apply(bemjson);
        return {status: 1, html: html};
    } catch (err) {
        console.error('BEMHTML error', err.stack);
        return {status: 0, error: err.stack};
    }

}

function render(req, res, data, context) {
    console.dir(req.lang);
    var query = req.query,
        user = req.user,
        lang = req.lang || 'ru',
        cacheKey = req.url + req.lang + (context ? JSON.stringify(context) : '') + (user ? JSON.stringify(user) : ''),
        cached = cache[cacheKey];

    if (useCache && cached && (new Date() - cached.timestamp < cacheTTL)) {
        return res.send(cached.html);
    }

    if (isDev && query.json) return res.send('<pre>' + JSON.stringify(data, null, 4) + '</pre>');

    var bemtreeCtx = {
        block: 'root',
        context: context,
        // extend with data needed for all routes
        data: Object.assign({}, {
            url: req._parsedUrl
        }, data)
    };

    try {
        var bemjson = BEMTREE[lang].apply(bemtreeCtx);
    } catch (err) {
        console.error('BEMTREE error', err.stack);
        console.trace('server stack');
        return res.sendStatus(500);
    }

    if (isDev && query.bemjson) return res.send('<pre>' + JSON.stringify(bemjson, null, 4) + '</pre>');

    try {
        var html = BEMHTML.apply(bemjson);
    } catch (err) {
        console.error('BEMHTML error', err.stack);
        return res.sendStatus(500);
    }

    useCache && (cache[cacheKey] = {
        timestamp: new Date(),
        html: html
    });

    res.send(html);
}

function dropCache() {
    cache = {};
}

module.exports = {
    render: render,
    getHtmlContent: getHtmlContent,
    dropCache: dropCache
};
