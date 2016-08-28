block('logo')(
    tag()('img'),
    attrs()(function() {
        return {
            src: '/logo.png',
            alt: 'logo'
        }})
)