var techs = {
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),
        fileCopy: require('enb/techs/file-copy'),
        borschik: require('enb-borschik/techs/borschik'),
        stylus: require('enb-stylus/techs/stylus'),
        browserJs: require('enb-js/techs/browser-js'),
        bemtree: require('enb-bemxjst-i18n/techs/bemtree-i18n'),
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        prependYm: require('enb-modules/techs/prepend-modules'),
        nodeJs: require('enb-js/techs/node-js'),
        // i18n
        keysets: require('enb-bem-i18n/techs/keysets'),
        i18n: require('enb-bem-i18n/techs/i18n')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        { path: 'libs/bem-history/common.blocks', check: false },
        'common.blocks',
        'design/common.blocks'
    ],
    langs = require('../server/config').langs;

var isProd = process.env.YENV === 'production';
isProd || levels.push('development.blocks');

module.exports = function(config) {

    config.setLanguages(langs);

    config.includeConfig('enb-bem-specs');
    var tests = config.module('enb-bem-specs').createConfigurator('specs');
    tests.configure({
        destPath: 'desktop.specs',
        levels: ['common.blocks'],
        sourceLevels: [
            // { path: '../libs/bem-core/common.blocks', check: false },
            // { path: '../libs/bem-pr/spec.blocks', check: false },
            'common.blocks'
        ]
    });

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.stylus, {
                target: '?.css',
                sourcemap: false,
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%', 'iOS >= 7', 'Android >= 2']
                }
            }],

            // i18n
            [techs.keysets, { lang: '{lang}' }],
            [techs.i18n, {
                exports: { ym: true },
                lang: '{lang}'
            }],

            // bemtree
            [techs.bemtree, {
                lang: '{lang}',
                sourceSuffixes: ['bemtree', 'bemtree.js']
            }],

            // templates
            [techs.bemhtml, { sourceSuffixes: ['bemhtml', 'bemhtml.js'] }],

            // client templates
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.tmpl.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.tmpl.deps.js',
                bemdeclFile: '?.tmpl.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.tmpl.deps.js',
                filesTarget: '?.tmpl.files',
                dirsTarget: '?.tmpl.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.tmpl.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js']
            }],

            // node.js
            [techs.nodeJs, { includeYM: true }],

            // js
            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.{lang}.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js', '?.lang.{lang}.js'],
                lang: '{lang}'
            }],
            [techs.prependYm, {
                source: '?.pre.{lang}.js',
                target: '?.{lang}.js'
            }],

            // borschik
            [techs.borschik, { source: '?.{lang}.js', target: '?.{lang}.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }],

            [techs.fileCopy, { source: '?.{lang}.min.js', target: '../../static/?.{lang}.min.js' }],
            [techs.fileCopy, { source: '?.min.css', target: '../../static/?.min.css' }]
        ]);

        nodeConfig.addTargets(['?.bemtree.{lang}.js', '?.bemhtml.js', '../../static/?.{lang}.min.js', '../../static/?.min.css']);
    });
};
