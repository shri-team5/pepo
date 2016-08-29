block('username')(
    tag()('a'),
    attrs()(function () {
        return {
            href: this.ctx.href,
            title: this.ctx.title
        }
    })
);
