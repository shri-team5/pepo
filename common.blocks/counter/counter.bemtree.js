block('counter').content()(function () {// eslint-disable-line no-undef

    return [
        {
            elem: 'number',
            content: this.ctx.data.number
        },
        {
            elem: 'text',
            content: this.ctx.data.text
        }

    ]
});