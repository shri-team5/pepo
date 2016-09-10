block('counter').content()(function () {
    return [
        {
            elem: 'number',
            content: this.ctx.data.number
        },
        {
            elem: 'text',
            content: this.ctx.data.text
        }
    ];
});
