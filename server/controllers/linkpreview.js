const render = require('../render').render;
const ogs = require('open-graph-scraper');


const extractDomain = (url) => {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

const get = (req, res) => {

    const link = req.query.link;

    ogs({'url': link}, (err, results) => {
        console.log(`err: ${err}`);
        console.dir(results, {depth: null, colors: true});
        if (!err) {
            let imageUrl = null;
            console.log(results.data);
            if (results.data.ogImage) {
                if (results.data.ogImage.url.startsWith('http') || results.data.ogImage.url.startsWith('//')) {
                    imageUrl = results.data.ogImage.url;
                } else {
                    imageUrl = '//' + extractDomain(link) + results.data.ogImage.url;
                }

            } else {
                imageUrl = '/no-image.png';
            }
            const linkPreview = {
                image: imageUrl,
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
