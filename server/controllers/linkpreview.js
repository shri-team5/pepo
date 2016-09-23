const render = require('../render').render;
const ogs = require('open-graph-scraper');

const get = (req, res) => {

    const link = req.query.link;

    ogs({'url': link}, (err, results) => {
        console.log(`err: ${err}`);
        console.dir(results, {depth: null, colors: true});
        if (!err) {
            let image_url = null;
            if(results.data.ogImage){
                let arr = link.split("/");
                let domein = arr[0] + "//" + arr[2]
                image_url = results.data.ogImage.url.startsWith('http') ? results.data.ogImage.url : domein + results.data.ogImage.url
            }else{
                image_url = '/no-image.png';
            }
            const linkPreview = {
                image: image_url,
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
