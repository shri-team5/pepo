block('userpic')(
    tag()('img'),
    attrs()(function() {

        const src = this.ctx.src ? this.ctx.src : '/avatar_placeholder.png';

        return {
            src: src,
            alt: this.ctx.alt
        }})
)