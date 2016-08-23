modules.define('new-tweet', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name, {
            onSetMod: {
                js: function () {
                    this.on('new-tweet', console.log('emit happened'));
                }
            }
        })
    )
});
