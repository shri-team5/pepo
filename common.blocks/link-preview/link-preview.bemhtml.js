block('link-preview')(
    js()(true),
    elem('link')(
        tag()('input')
    )
);

block('link-preview').match(function () {
    return !this.ctx.formlinks || true;
})(
    tag()('a'),
    attrs()(function () {
        return {href: this.ctx.data ? this.ctx.data.url : ''};
    })
);
