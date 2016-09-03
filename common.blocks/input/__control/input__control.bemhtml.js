block('input').elem('control')(
    attrs()(function () {
        var input = this._input,
            attrs = {
                required: true
            };

        return this.extend(attrs, applyNext());
    })
);
