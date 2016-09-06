block('page').mod('view', '404').content()(function() {
    var i18n = this.i18n;
    return i18n('page', 'pageNotFound');
});
