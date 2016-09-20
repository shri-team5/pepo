const render = require('../render').render;
const ogs = require('open-graph-scraper');

const get = (req, res) => {

    const link = req.query.link;

    ogs({'url': link}, (err, results) => {
        console.log(`err: ${err}`);
        console.dir(results, {depth: null, colors: true});
        if (!err) {
            const linkPreview = {
                image: results.data.ogImage && results.data.ogImage.url || '',
                title: results.data.ogTitle || '',
                description: results.data.ogDescription || '',
                url: link.startsWith('http') ? link : '//' + link
            };
            render(req, res, null, {
                block: 'link-preview',
                data: linkPreview,
                formlinks: true
            });
        }
    });
};

module.exports = {
    get
};
