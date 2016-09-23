block('time').content()(function () {
    var defaultFormat = 'DD-MM-YYYY hh:mm:ss';

    var moment = require('moment');
    if (!this.ctx.locale) {
        moment.locale(this.i18n('app','lang'));
    } else {
        moment.locale(this.ctx.locale);
    }

    var content = moment(this.ctx.time).format(defaultFormat);

    if (this.ctx.relative) {
        content = moment(this.ctx.time).fromNow();
    } else {
        if (this.ctx.format) {
            content = moment(this.ctx.time).format(this.ctx.format);
        }
    }

    return content;
});