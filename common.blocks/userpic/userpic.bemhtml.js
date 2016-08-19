block('userpic')(
    tag()('img'),
    attrs()(function() {
        return {
            src: this.ctx.src,
            alt: this.ctx.alt
        }})
)